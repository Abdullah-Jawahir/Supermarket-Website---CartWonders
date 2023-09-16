const video = document.querySelector("#carousel video");
const videos = ["./Videos/video-1.mp4", "./Videos/video-2.mp4"];
let currentVideoIndex = 0;

function playVideo(index) {
    video.src = videos[index];
    video.load();
    video.play();
}

function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    playVideo(currentVideoIndex);
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    playVideo(currentVideoIndex);
}

// Initial video play
playVideo(currentVideoIndex);
