let count = 0;
let intervalId;

const countElement = document.getElementById("count");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resumeBtn = document.getElementById("resume-btn");
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click", () => {
  intervalId = setInterval(() => {
    count++;
    countElement.textContent = count;
  }, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resumeBtn.disabled = true;
  stopBtn.disabled = false;
});

pauseBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  pauseBtn.disabled = true;
  resumeBtn.disabled = false;
});

resumeBtn.addEventListener("click", () => {
  intervalId = setInterval(() => {
    count++;
    countElement.textContent = count;
  }, 1000);
  pauseBtn.disabled = false;
  resumeBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  count = 0;
  countElement.textContent = count;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resumeBtn.disabled = true;
  stopBtn.disabled = true;
});
