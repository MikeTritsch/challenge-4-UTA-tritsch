// Variables

var timeEl = document.querySelector(".timer");
var scoreEl = document.querySelector(".scoreCard");
var startGame = document.querySelector("#startButton");
var instructions = document.querySelector(".instructions");
var gameSpace = document.querySelector(".gamespace");
var questionSpace = document.getElementById("questionSpace");
var answerSpace = document.getElementById("answerSpace");
var currentQuestionIndex = 0;
var score = 0;
var secondsLeft = 30;
var questions = [
    {
        question: "What is the main purpose of a variable JavaScript?",
        answers: [
            { choice: "Stores all kinds of information", correct: true},
            { choice: "Creates a new page", correct: false},
            { choice: "Links a stylesheet to an HTML document", correct: false},
            { choice: "None of the above", correct: false},
        ]
    },
    {
        question: "Where do you link an external JavaScript file in an HTML doc?",
        answers: [
            { choice: "In the head element", correct: false},
            { choice: "In the body", correct: true},
            { choice: "Links a stylesheet to an HTML document", correct: false},
            { choice: "In the README", correct: false},
        ]
    },
    {
        question: "What is considered an object in JavaScript?",
        answers: [
            { choice: "variables", correct: false},
            { choice: "arrays", correct: false},
            { choice: "methods", correct: false},
            { choice: "All of the above", correct: true},
        ]
    },
    {
        question: "What is the traditional way to write general JavaScript called?",
        answers: [
            { choice: "camelCase", correct: true},
            { choice: "semantic", correct: false},
            { choice: "function-based", correct: false},
            { choice: "pseudo-code", correct: false},
        ]
    },
    {
        question: "Was this quiz hard to make?",
        answers: [
            { choice: "Yep", correct: true},
            { choice: "Nah, it was easy.", correct: false},
            { choice: "See choice one", correct: false},
            { choice: "Not choice two", correct: false},
        ]
    }
];



startGame.addEventListener("click", function() {
    // Removes button, instructions, addes score
    startGame.style.display = "none";
    instructions.style.display = "none";
    scoreEl.style.display = "block";
    scoreEl.textContent = "Your score: " + score;
    currentQuestionIndex = 0;
    questionCycle();
    setTime();
});


    // Adds timer
    function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining.";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
    };

function questionCycle(){
    var currentQuestion = questions[0];
    var questionNumb = currentQuestionIndex + 1;
    questionSpace.innerHTML = questionNumb + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML = answer.choice;
        answerSpace.appendChild(button);

    button.addEventListener("click", nextQuestion);

    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        questionCycle();
    }else{
        
    }
};