document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const videoGallery = document.getElementById('videoGallery');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        const videos = document.querySelectorAll('.video-item');

        searchResults.innerHTML = ''; // Clear previous results

        videos.forEach(video => {
            const title = video.querySelector('.video-title').textContent.toLowerCase();
            if (title.includes(query)) {
                searchResults.appendChild(video.cloneNode(true));
            }
        });

        if (searchResults.children.length === 0) {
            searchResults.innerHTML = '<p>No results found.</p>';
        }
    });

    if (localStorage.getItem('bookmarks')) {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.forEach(id => {
            const bookmarkButton = document.getElementById(id).querySelector('.bookmark-button');
            bookmarkButton.classList.add('active');
        });
    }

    const videos = document.querySelectorAll('.video-item');
    videos.forEach(video => {
        const videoId = video.id;
        const likeCount = document.getElementById(`like-count-${videoId}`);
        const dislikeCount = document.getElementById(`dislike-count-${videoId}`);

        const likes = localStorage.getItem(`likes-${videoId}`) || 0;
        const dislikes = localStorage.getItem(`dislikes-${videoId}`) || 0;

        likeCount.textContent = likes;
        dislikeCount.textContent = dislikes;
    });
});

function bookmarkVideo(button) {
    const videoItem = button.closest('.video-item');
    const videoId = videoItem.id;

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    if (button.classList.contains('active')) {
        button.classList.remove('active');
        bookmarks = bookmarks.filter(id => id !== videoId);
    } else {
        button.classList.add('active');
        bookmarks.push(videoId);
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

function likeVideo(videoId) {
    const likeCount = document.getElementById(`like-count-${videoId}`);
    let likes = localStorage.getItem(`likes-${videoId}`) || 0;
    likes = parseInt(likes) + 1;
    localStorage.setItem(`likes-${videoId}`, likes);
    likeCount.textContent = likes;
}

function dislikeVideo(videoId) {
    const dislikeCount = document.getElementById(`dislike-count-${videoId}`);
    let dislikes = localStorage.getItem(`dislikes-${videoId}`) || 0;
    dislikes = parseInt(dislikes) + 1;
    localStorage.setItem(`dislikes-${videoId}`, dislikes);
    dislikeCount.textContent = dislikes;
}
