$(function() {
    $("#filterForm").submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        var organizationType = $("input[name='organizationType']:checked").val();

        // Send POST request to the server
        $.post('/filter', { type: organizationType }, function(foodBanks) {
            console.log("Success:", foodBanks);
            // Call the function to display the food banks on the page
            displayFoodBanks(foodBanks);
        }).fail(function() {
            console.log("Error: Data could not be sent.");
            // Optionally, update the UI here to inform the user of the error
        });
    });
});


function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = (lat2 - lat1) * Math.PI / 180;  
    var dLon = (lon2 - lon1) * Math.PI / 180; 
    var a = 
        0.5 - Math.cos(dLat)/2 + 
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        (1 - Math.cos(dLon))/2; 

    return R * 2 * Math.asin(Math.sqrt(a));
}

function displayFoodBanks(foodBanks) {
    var listContainer = $('#foodBanksList');
    var listContainerRemaining = $('#remainingList');
    listContainer.empty(); // Clear any existing content
    listContainerRemaining.empty(); // Clear any existing content

    // Make the containers visible
    listContainer.show();
    listContainerRemaining.show();

    if (foodBanks.length > 0 && userLocation) {
        // Calculate distances
        foodBanks.forEach(function(foodBank) {
            foodBank.distance = calculateDistance(userLocation.latitude, userLocation.longitude, foodBank.Latitude, foodBank.Longitude);
        });

        // Sort by distance
        foodBanks.sort(function(a, b) {
            return a.distance - b.distance;
        });

        // Display all places
        foodBanks.forEach(function(foodBank, index) {
            var ranking = index + 1; // Index is 0-based, so add 1 for the ranking

            var button = $('<button>')
                .addClass('food-bank-item-button')
                .addClass('bold-text') // For bold text
                .text(foodBank.Name)
                .attr('data-address', foodBank.Address)
                .on('click', function() {
                    var address = $(this).data('address');
                    $('#requestedAddress').text(address); // Display the address
                    $('#inputField').val(address); // Set the address into the search box
                    document.getElementById("inputField").value = "change";
                    chosenLiteral = []; //Resets chosen coordinates
                    chosenLiteral.push(parseFloat(foodBank.Longitude)); //Takes chosen place's coordinates and puts them into arrays
                    chosenLiteral.push(parseFloat(foodBank.Latitude));

                    // Call the Geocoding API to convert the address to coordinates
                    convertAddressToCoordinates(address, function(lat, lng) {
                        $('#rlatitude').text(lat);
                        $('#rlongitude').text(lng);
                    });

                    //Scroll to map and info box
                    document.getElementById("map").scrollIntoView({ block: "center" });
                });

            var workHours = $('<span>')
                .addClass('info-detail')
                .text('Work Hours: ' + foodBank['Work Hours']);

            //workHours.style.fontSize = "25px";

            var contactEmail = $('<span>')
                .addClass('info-detail')
                .text('Contact Email: ' + foodBank['Contact Email']);

            var contactNumber = $('<span>')
                .addClass('info-detail')
                .text('Contact Number: ' + foodBank['Contact Number']);

            var foodBankItem = $('<div>')
                .addClass('food-bank-item')
                .append($('<span>').addClass('ranking').text(ranking + '. '))
                .append(button)
                .append(workHours)
                .append(contactEmail)
                .append(contactNumber);

            if (ranking <= 5)
                listContainer.append(foodBankItem);
            else
                listContainerRemaining.append(foodBankItem);
        });
    } else {
        listContainerRemaining.append($('<p>').text('No food banks found.'));
    }
}




// Function to convert address to coordinates
function convertAddressToCoordinates(address, callback) {
    // Use the Geocoding API
    var geocodingUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
    $.getJSON(geocodingUrl, {
        address: address,
        key: 'AIzaSyAw00m47zOCrykLCW3n2uC3dj824T80J3Y' 
    }, function(data) {
        if (data.status === 'OK') {
            var results = data.results[0].geometry.location;
            callback(results.lat, results.lng);
        } else {
            console.error('Geocoding failed: ' + data.status);
        }
    }).fail(function() {
        console.error('Error: Could not contact the Geocoding API.');
    });
}