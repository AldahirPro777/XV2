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

//? CountDown Timer
function updateCountdown() {
  const targetDate = new Date("April 26, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    document.getElementById("days").innerText = "0";
    document.getElementById("hours").innerText = "0";
    document.getElementById("minutes").innerText = "0";
    document.getElementById("seconds").innerText = "0";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Ejecuta la función inmediatamente para evitar el retraso inicial
