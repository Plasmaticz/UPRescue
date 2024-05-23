// @Author: Eric Su, Calvin Phuong Google Maps Platform
// Initialize and add the map
let map;

var ac = new google.maps.places.Autocomplete(document.getElementById('inputField'));

//Database request for every place
$(function() {
  var organizationType = "All";

  // Send POST request to the server
  $.post('/filter', { type: organizationType }, function(places) {
      console.log("Success:", places);
      // Call the function to display the food banks on the page
      addInfo(places);
  }).fail(function() {
      console.log("Error: Data could not be sent.");
      // Optionally, update the UI here to inform the user of the error
  });
});

//Arrays that will store necessary data
var latitudes = [];
var longitudes = [];

// Function to add info into arrays
function addInfo(places) {
  places.forEach(function(place) {
     names.push(place.Name);
     latitudes.push(parseFloat(place.Latitude));
     longitudes.push(parseFloat(place.Longitude));
  });
}

// Initializing Map function
async function initMap() {
  // The location of Portland
  const position = globalUserLocation; // This will reference the updated location
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  

  // The map, centered at Portland
  map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: position,
    mapId: "DEMO_MAP_ID",
    mapTypeId: 'hybrid',

  });

  // place marker at User location
  var marker = new AdvancedMarkerElement({
    map: map,
    position: position
  });

  // Adds all markers for ALL locations
  for (var i = 0; i < latitudes.length; i++) {
    marker =  await new AdvancedMarkerElement({
      map: map,
      position: { lat: longitudes[i], lng: latitudes[i] }
    });
  }

  //Search box
  new google.maps.places.Autocomplete(document.getElementById('inputField'));

  // Add listener for the Nearby Search button
  document.getElementById('nearbySearchBtn').addEventListener('click', performNearbySearch);
 
  function performNearbySearch() {
    const center = map.getCenter();
    const request = {
        location: center,
        radius: '500', // Search within 500 meters of the center
        type: ['restaurant'] // Example type. Modify as needed
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }

  function createMarker(newMap) {
    // Function to create a marker for each place
    marker = new AdvancedMarkerElement({
      map: map,
      position: newMap, //place.geometry.location,
    });
  }

  //var ac = new google.maps.places.Autocomplete(document.getElementById('inputField'));

  google.maps.event.addListener(ac, 'place_changed', function() {
    //var place = ac.getPlace();
   // document.getElementById("inputField2").value = place.formatted_address + place.formatted_phone_number;

    // variable to store Google Place geolocation
    //var loc = place.geometry.location;

    // refreshes map to new location
    //Takes chosen coordinates and turns them into a LatLng Literal object
    var newMap = new google.maps.LatLng(chosenLiteral[0], chosenLiteral[1]); //loc
    console.log(newMap);
    map.panTo(newMap);
    map.setZoom(20);

    // Deletes previous marker and creates new marker at location 
    marker.setMap(null);
    createMarker(newMap); //place
  });
}

//Waits for hidden input field to be changed
window.setInterval( function(){
      if (document.getElementById("inputField").value != "") {
        google.maps.event.trigger(ac, 'place_changed');
         
        document.getElementById("inputField").value = "";
      }
    },10)

initMap();