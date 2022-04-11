const video = document.querySelector(".screen");
const play = document.querySelector(".play");
const stop = document.querySelector(".stop");
const progress = document.querySelector(".progress");
const timeStamp = document.querySelector(".timestamp");

// Play & pause video
const toggleVideoStatus = function () {
  video.paused ? video.play() : video.pause();
};

// Update play/pause icon
const updatePlayIcon = function () {
  if (video.paused) {
    play.innerHTML = `<ion-icon name="play"></ion-icon>`;
  } else {
    play.innerHTML = `<ion-icon name="pause"></ion-icon>`;
  }
};

// Update Progress and timeStamp
const updateProgress = function () {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timeStamp.innerHTML = ` ${mins}:${secs}`;
};

// Stop Video
const stopVideo = function () {
  video.currentTime = 0;
  video.pause();
};

// Set Video Progress
const setVideoProgress = function () {
  video.currentTime = (+progress.value * video.duration) / 100;
  video.play();
};

// Event Listener for Video player
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);
