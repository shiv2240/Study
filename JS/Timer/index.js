const timer = document.getElementById('timer');
let count = 0;
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let timerId;

function updateTimer() {
    count++;
    let seconds = Math.floor(count / 100) % 60;
    let minutes = Math.floor(count / 6000) % 60;
    let hours = Math.floor(count / 360000);
    timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

start.addEventListener('click', function() {
    timerId = setInterval(updateTimer, 10);
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
});

stop.addEventListener('click', function() {
    clearInterval(timerId);
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
});

reset.addEventListener('click', function() {
    clearInterval(timerId);
    count = 0;
    timer.textContent = "00:00:00";
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
});
