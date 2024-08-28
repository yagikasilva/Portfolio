// script.js

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openProjectBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



var Emodal = document.getElementById("myEducation");

// Get the button that opens the modal
var Ebtn = document.getElementById("openEducationBtn");

// Get the <span> element that closes the modal
var Espan = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal
Ebtn.onclick = function() {
    Emodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
Espan.onclick = function() {
    Emodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == Emodal) {
        Emodal.style.display = "none";
    }
}
