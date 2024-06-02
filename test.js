document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById('popup');
    const watchButton = document.getElementById('watchButton');
    const closeButton = document.getElementById('closeButton');

    // Show the popup on page load
    popup.style.display = 'flex';

    // Hide the popup when the watch button is clicked
    watchButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Hide the popup when the close button is clicked
    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});
