// @Author: Yutaka Roberts, W3Schools

//Variable that will contain the chosen
var chosenLiteral = [];

//Variable that contains all database entries
var data = [];

//Pre-written functions that sets up the autocomplete functionality into the input
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              console.log(inp.value);
              //Resets chosen coordinates
              chosenLiteral = [];
              //Finds index number of chosen place
              //Then takes corresponding chosen place's coordinates and puts them into an array
              chosenLiteral.push(longitudes[names.indexOf(inp.value)]);
              chosenLiteral.push(latitudes[names.indexOf(inp.value)]);
              
              console.log(chosenLiteral);
              document.getElementById("inputField").value = inp.value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();

              //Reveal info box
              document.getElementById("infoBox").style.display = "block";

              //Update info box with text
              updateInfoBox(names.indexOf(inp.value));

              //Scroll to map and info box
              document.getElementById("map").scrollIntoView({ block: "end" });
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

//Arrays that will store necessary data
var names = [];
var latitudes = [];
var longitudes = [];

//Database request for every place
$(function() {
    var organizationType = "All";

    // Send POST request to the server
    $.post('/filter', { type: organizationType }, function(places) {
        console.log("Success:", places);
        // Call the function to display the food banks on the page
        addInfo(places);
        data = places;
    }).fail(function() {
        console.log("Error: Data could not be sent.");
        // Optionally, update the UI here to inform the user of the error
    });
});

//Gets every name and coordinate from data and inputs them into arrays
function addInfo(places) {
  places.forEach(function(place) {
     names.push(place.Name);
     latitudes.push(parseFloat(place.Latitude));
     longitudes.push(parseFloat(place.Longitude));
  });
}

//Replaces information box with information about selected place
function updateInfoBox(index) {
  document.getElementById("infoText").innerText = "Name: " + data[index].Name + "\nAddress: " + data[index].Address + "\nContact Email: " + data[index]['Contact Email'] + "\nContact Number: "+ data[index]['Contact Number'] + "\nWork Hours: "+ data[index]['Work Hours'];
  console.log(data[index]);
}


/*initiate the autocomplete function on the "myInput" element, and pass along the names array as possible autocomplete values:*/
window.onload=function(){
  autocomplete(document.getElementById("myInput"), names);
}
