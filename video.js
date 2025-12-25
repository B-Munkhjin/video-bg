const playPauseBtn = document.querySelector(".playPause");
const video = document.querySelector("#myVideo");

function pause() {
  if (video.paused) {
    video.play();
    playPauseBtn.innerHTML = "Pause";
  } else {
    video.pause();
    playPauseBtn.innerHTML = "Play";
  }
}
