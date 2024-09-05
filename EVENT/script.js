// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get the button and pop-up elements
    var welcomeButton = document.getElementById('welcome-button');
    var popup = document.getElementById('popup');
    var closePopupButton = document.getElementById('close-popup');

    // Show the pop-up when the welcome button is clicked
    welcomeButton.addEventListener('click', function() {
        popup.style.display = 'block'; // Show the pop-up
    });

    // Hide the pop-up when the "Thank you" button is clicked
    closePopupButton.addEventListener('click', function() {
        popup.style.display = 'none'; // Hide the pop-up
    });
});

