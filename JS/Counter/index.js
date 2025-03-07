const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increase');
const decrementBtn = document.getElementById('decrease');
let count = 0;

const increment = () => {
    count++;
    counter.innerHTML = count;
}

const decrement = () => {
    if (count > 0) {
        count--;
        counter.innerHTML = count;
    }
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
