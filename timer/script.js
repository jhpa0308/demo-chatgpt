let timerInterval;
let timerSeconds = 0;
let timerMinutes = 0;
let timerHours = 0;
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
  startBtn.disabled = true;
}

function stopTimer() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerSeconds = 0;
  timerMinutes = 0;
  timerHours = 0;
  updateDisplay();
  startBtn.disabled = false;
}

function updateTimer() {
  timerSeconds++;
  if (timerSeconds === 60) {
    timerSeconds = 0;
    timerMinutes++;
    if (timerMinutes === 60) {
      timerMinutes = 0;
      timerHours++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  const seconds = timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds;
  const minutes = timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes;
  const hours = timerHours < 10 ? `0${timerHours}` : timerHours;
  timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
