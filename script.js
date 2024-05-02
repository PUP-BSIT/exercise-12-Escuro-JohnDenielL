let count = 0;
let intervalId;

const countElement = document.getElementById("count");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resumeBtn = document.getElementById("resume-btn");
const stopBtn = document.getElementById("stop-btn");

function incrementCount() {
  count++;
  countElement.textContent = count;
}

function startCounter() {
  intervalId = setInterval(incrementCount, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resumeBtn.disabled = true;
  stopBtn.disabled = false;
}

function pauseCounter() {
  clearInterval(intervalId);
  pauseBtn.disabled = true;
  resumeBtn.disabled = false;
}

function resumeCounter() {
  intervalId = setInterval(incrementCount, 1000);
  pauseBtn.disabled = false;
  resumeBtn.disabled = true;
}

function stopCounter() {
  clearInterval(intervalId);
  count = 0;
  countElement.textContent = count;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resumeBtn.disabled = true;
  stopBtn.disabled = true;
}

startBtn.addEventListener("click", startCounter);
pauseBtn.addEventListener("click", pauseCounter);
resumeBtn.addEventListener("click", resumeCounter);
stopBtn.addEventListener("click", stopCounter);
