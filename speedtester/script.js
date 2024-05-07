// Get necessary elements
const sampleText = document.getElementById('sampleText');
const textInput = document.getElementById('textInput');
const timerDisplay = document.getElementById('timer');
const charCountDisplay = document.getElementById('charCount');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

let startTime;
let timerInterval;
let pausedTime = 0;
let isPaused = false;

// Start timer when user starts typing
textInput.addEventListener('input', startTimer);

// Pause timer when pause button is clicked
pauseBtn.addEventListener('click', pauseTimer);

// Reset timer when reset button is clicked
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
  if (!startTime) {
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function pauseTimer() {
  if (!isPaused) {
    clearInterval(timerInterval);
    pausedTime = new Date() - startTime + pausedTime;
    isPaused = true;
    pauseBtn.textContent = 'Resume';
  } else {
    startTime = new Date() - pausedTime;
    timerInterval = setInterval(updateTimer, 1000);
    isPaused = false;
    pauseBtn.textContent = 'Pause';
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  startTime = null;
  pausedTime = 0;
  isPaused = false;
  pauseBtn.textContent = 'Pause';
  updateTimer();
}

function updateTimer() {
  const currentTime = new Date();
  const elapsedTime = new Date(currentTime - startTime - pausedTime);
  const hours = elapsedTime.getUTCHours().toString().padStart(2, '0');
  const minutes = elapsedTime.getUTCMinutes().toString().padStart(2, '0');
  const seconds = elapsedTime.getUTCSeconds().toString().padStart(2, '0');
  timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update character count in real-time
textInput.addEventListener('input', updateCharCount);

function updateCharCount() {
  const charCount = textInput.value.length;
  charCountDisplay.textContent = `Characters: ${charCount}`;
}
