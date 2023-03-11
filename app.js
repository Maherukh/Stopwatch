let time = document.querySelector("h2");
let startBtn = document.querySelector(".start");
let pauseBtn = document.querySelector(".pause");
let ResetBtn = document.querySelector(".reset");

let seconds = 0;
let interval;

function stopWatch() {
    seconds += 1;
    let hours = Math.floor(seconds / 3600);
    let min = Math.floor((seconds - (hours * 3600)) / 60);
    let sec = seconds % 60;
    time.innerText = `${hours} : ${min} : ${sec}`;
}

startBtn.addEventListener("click", () => {
    interval = setInterval(stopWatch, 10);
    
})

pauseBtn.addEventListener("click", () => {
    clearInterval(interval);
})

ResetBtn.addEventListener("click", () => {
    seconds = 0;
    time.innerText = `00:00:00`;
    clearInterval(interval);
})

