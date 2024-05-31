// script.js
document.addEventListener('DOMContentLoaded', () => {
    const videoItems = document.querySelectorAll('.video-item');
    const videoFrame = document.getElementById('video-frame');

    videoItems.forEach(item => {
        item.addEventListener('click', () => {
            const videoId = item.getAttribute('data-video-id');
            videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
        });
    });
});




