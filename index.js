var buttonContainer = document.getElementById("buttonContainer");

buttonContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("action-button")) {
    alert(event.target.innerText + " was clicked!");
    }
}, true);