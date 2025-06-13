const display = document.getElementById("display");
const message = document.getElementById("message");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){

    if(!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval (update, 10);
        isRunning = true;
    }

}

function stop(){

    if(isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
        const difficulty = document.getElementById("difficulty").value;
        const option = parseInt(difficulty);
        const time = Math.abs(elapsedTime - 5000);

        if (time <= option) {
            message.innerHTML = "Perfect! You stopped at 5 seconds!";
        } else if (elapsedTime < 5000) {
            message.innerHTML = "Too early! You stopped before 5 seconds!";
        } else {
            message.innerHTML = "Too late! You stopped after 5 seconds!";
        }
    }

}
function reset(){

    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000% 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String (hours).padStart (2, "0");
    minutes = String (minutes).padStart (2, "0");
    seconds = String (seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");
    display.textContent = `${hours}: ${minutes}: ${seconds}:${milliseconds}`
}