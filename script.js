var audio = document.getElementById("audioPlayer");

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
}

function mute() {
    audio.muted = !audio.muted;
}