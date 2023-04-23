const startAndPauseBtn = document.querySelector("#start-and-pause-btn");
const restartBtn = document.querySelector("#restart-btn");
let timer = document.querySelector("#timer");
let sec = null;

startAndPauseBtn.onclick = () => {
  startAndPauseBtn.classList.toggle("started");
  startAndPauseBtn.classList.toggle("inverted-colors");

  if (startAndPauseBtn.classList.contains("started")) {
    startAndPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else {
    startAndPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  }
};
