var timeEl = document.querySelector(".timer");
var startGame = document.querySelector("#startButton");
var instructions = document.querySelector(".instructions");
var gameSpace = document.querySelector(".gamespace");
var questionSpace = document.querySelector("#questionSpace");
var answerSpace = document.querySelector("#answerSpace");


var sampleQuestion = "Testing";
var questions = [
    {
        questionOne: ["This is a question"],
        answers: ["a", "b", "c", "d"]
    },

    {
        question: "This is another question",
        answers: ["a", "b", "c", "d"]
    },

    {
        question: "This is a third question",
        answers: ["a", "b", "c", "d"]
    },

    {
        question: "This is a fourth question",
        answers: ["a", "b", "c", "d"]
    },

    {
        question: "This is question yurrr",
        answers: ["a", "b", "c", "d"]
    }
]

startGame.addEventListener("click", function() {
    // Removes button and instructions so far
    startGame.style.display = "none";
    instructions.style.display = "none";
    questionSpace.textContent = questions[0].questionOne;
    answerSpace.textContent = questions[0].answers;

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