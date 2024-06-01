document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".hero-image img");
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }, 5000); // Change the interval as needed (in milliseconds)
});
