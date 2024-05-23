// geolocation.js
// @Author: Eric
// Comments: Gets user location, stores it in "userLocation", and displays it on the webpage.

var userLocation;
var globalUserLocation = { lat: 45.523064, lng: -122.676483 }; // Default values

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    userLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    };
    console.log("Location acquired:", userLocation);
    
    // Enable the radio buttons and submit button
    $("#filterForm input[type='radio']").prop('disabled', false);
    $('#submitBtn').prop('disabled', false);

    displayLocation(userLocation); // Assuming this function displays the location

    // Turn off the loading screen
    $('#loadingScreen').hide();
}

const langTexts = {
    en: {
        map: "Map",
        suggestions: "Suggestions",
        resourceIndex: "Resource Index",
        userManual: "User Manual",
        about: "About",
        admin: "Admin",
        searchNearby: "Search Nearby",
        enterAddress: "Enter an Address",
        enterName: "Enter name",
        foodBanks: "Food Banks",
        homelessShelters: "Homeless Shelters",
        addictionRehab: "Addiction Rehabilitation",
        alternativeShelter: "Alternative Shelters",
        healthClinics: "Health Clinics",
        allAbove: "All of the above",
        submit: "Submit",
        infoBoxClose: "X"
    },
    es: {
        map: "Mapa",
        suggestions: "Sugerencias",
        resourceIndex: "Índice de Recursos",
        userManual: "Manual de Usuario",
        about: "Acerca de",
        admin: "Administración",
        searchNearby: "Buscar Cercanos",
        enterAddress: "Introduce una dirección",
        enterName: "Ingresa nombre",
        foodBanks: "Bancos de Alimentos",
        homelessShelters: "Refugios para Sin Hogar",
        addictionRehab: "Rehabilitación de Adicciones",
        alternativeShelter: "Refugios Alternativos",
        healthClinics: "Clínicas de Salud",
        allAbove: "Todos los anteriores",
        submit: "Enviar",
        infoBoxClose: "Cerrar"
    }
};

function switchLanguage(language) {
    // Update text in the top navigation bar
    document.getElementById('topNav').children[0].textContent = langTexts[language].map;
    document.getElementById('topNav').children[1].textContent = langTexts[language].suggestions;
    document.getElementById('topNav').children[2].textContent = langTexts[language].resourceIndex;
    document.getElementById('topNav').children[3].textContent = langTexts[language].userManual;
    document.getElementById('topNav').children[4].textContent = langTexts[language].about;
    document.getElementById('topNav').children[5].textContent = langTexts[language].admin;

    // Update placeholders and values for input fields and buttons
    document.getElementById('nearbySearchBtn').textContent = langTexts[language].searchNearby;
    document.getElementById('inputField').placeholder = langTexts[language].enterAddress;
    document.getElementById('myInput').placeholder = langTexts[language].enterName;

    // Update radio button labels
    document.querySelector('label[for="foodBanks"]').textContent = langTexts[language].foodBanks;
    document.querySelector('label[for="homelessShelters"]').textContent = langTexts[language].homelessShelters;
    document.querySelector('label[for="addictionRehab"]').textContent = langTexts[language].addictionRehab;
    document.querySelector('label[for="alternativeShelter"]').textContent = langTexts[language].alternativeShelter;
    document.querySelector('label[for="healthClinics"]').textContent = langTexts[language].healthClinics;
    document.querySelector('label[for="all"]').textContent = langTexts[language].allAbove;

    // Update submit button text
    document.getElementById('submitBtn').value = langTexts[language].submit;

    // Update informational box close button
    document.getElementById('closeInfoBox').textContent = langTexts[language].infoBoxClose;
}



function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
}

function displayLocation(location) {
    // Assuming you have an element with the ID 'placesDataDisplay' to display the location
    const locationDisplayElement = document.getElementById('userLocationDisplay');
    if(locationDisplayElement) {
        locationDisplayElement.innerHTML = `<p>Latitude: ${location.latitude}, Longitude: ${location.longitude}</p>`;
    } else {
        console.log("Display element not found.");
    }

    globalUserLocation.lat = location.latitude;
    globalUserLocation.lng = location.longitude;
}

// Call getUserLocation to prompt the user and get their location
getUserLocation();
