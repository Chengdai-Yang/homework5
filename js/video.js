// Add js here.
var video = document.getElementById("videoplayer")
video.load();
video.autoplay = false;
video.loop = false;

function playvideo() {
    video.play();
}
document.getElementById("play").addEventListener("click", playvideo);

function pausevideo() {
    video.pause();
}
document.getElementById("pause").addEventListener("click", pausevideo);

function slowvideo() {
    if (video.playbackRate == 0.5) {
        alert("Video is at slowest speed!");
    }
    else {
        video.playbackRate /= 2;
    }
}
document.getElementById("slower").addEventListener("click", slowvideo);

function fastvideo() {
    if (video.playbackRate == 2) {
        alert("Video is at fastest speed!");
    }
    else {
        video.playbackRate *= 2;
    }
}
document.getElementById("faster").addEventListener("click", fastvideo);

function skipahead() {
    if (video.currentTime + 15 > video.duration) {
        video.currentTime = 0;
    }
    else {
        video.currentTime += 15;
    }
}
document.getElementById("skip").addEventListener("click", skipahead);

function mutevideo() {
    let mute_button = document.getElementById("mute");
    if (video.muted === false) {
        video.muted = true;
        mute_button.innerHTML = "Unmute";
    }
    else {
        // video.currentTime += 15;
        video.muted = false;
        mute_button.innerHTML = "Mute";
    }
}
document.getElementById("mute").addEventListener("click", mutevideo);

function slidevideo() {
    let text = document.getElementById("volume");
    let slidebar = document.getElementById("slider");
    text.innerHTML = slidebar.value;
    video.volume = slidebar.value / 100;
}
document.getElementById("slider").addEventListener("change", slidevideo);