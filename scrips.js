const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const stopBtn = document.getElementById("stop");
const progressBar = document.getElementById("progressBar");

playIcon.style.display = "block";
pauseIcon.style.display = "none";

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
  } else {
    audio.pause();
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
});

stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
  playIcon.style.display = "block";
  pauseIcon.style.display = "none";
});

audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = progress + "%";
});
