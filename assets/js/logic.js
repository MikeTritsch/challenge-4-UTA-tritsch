var timeEl = document.querySelector(".timer");
var startGame = document.querySelector("#startButton");
var instructions = document.querySelector(".instructions");
console.log(instructions);

startGame.addEventListener("click", function() {
    // Removes button and instructions so far
    startGame.style.display = "none";
    instructions.style.display = "none";

    // Adds timer
    var secondsLeft = 30;
    function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining.";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            // sendMessage();
        }
    }, 1000)
    }

    setTime();
});