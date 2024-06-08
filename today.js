// JavaScript for back button
function goBack() {
    window.history.back();
}
// Countdown function
function countdown(endDate, elementId) {
    var countDownDate = new Date(endDate).getTime();

    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(elementId).innerHTML = "Episode In : " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById(elementId).innerHTML = "Recent Episode";
        }
    }, 1000);
}

// Start countdown for each episode
countdown("June 23, 2024 20:30:00", "countdown1");
countdown("June 23, 2024 19:00:00", "countdown2");
