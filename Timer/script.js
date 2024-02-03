let timer;
let totalSeconds = 0;

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);

function startTimer() {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
    }
}

function updateTimer() {
    totalSeconds++;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('hours').innerText = padNumber(hours);
    document.getElementById('minutes').innerText = padNumber(minutes);
    document.getElementById('seconds').innerText = padNumber(seconds);

    updateProgressBar();
}

function padNumber(number) {
    return number < 10 ? '0' + number : number;
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const percentage = (totalSeconds % 60) / 60 * 100;
    progressBar.style.width = percentage + '%';
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    totalSeconds = 0;

    document.getElementById('hours').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';

    updateProgressBar();
}
