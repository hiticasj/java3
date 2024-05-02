var buttonContainer = document.getElementById("buttonContainer");

buttonContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("action-button")) {
    alert(event.target.innerText + " was clicked!");
    }
}, true); 

var form = document.getElementById("myForm");

var form = document.getElementById('myForm');

form.addEventListener('input', function(event) {
    var inputField = event.target;
    var isValid = inputField.checkValidity();
    
    if (!isValid) {
        alert(inputField.name + " is invalid!");
    }
});