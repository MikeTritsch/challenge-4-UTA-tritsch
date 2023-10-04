// Variables
var timeEl = document.querySelector(".timer");
var scoreEl = document.querySelector(".scoreCard");
var startGame = document.querySelector("#startButton");
var instructions = document.querySelector(".instructions");
var gameSpace = document.querySelector(".gamespace");
var questionSpace = document.getElementById("questionSpace");
var answerSpace = document.getElementById("answerSpace");
var initials = document.querySelector("#initialSection");
var playAgain = document.querySelector("#playAgain");
var currentQuestionIndex = 0;
var score = 0;
var secondsLeft = 20;

// Question Array
var questions = [
    {
        question: "What is the main purpose of a variable JavaScript?",
        answers: [
            { choice: "Stores all kinds of information"},
            { choice: "Creates a new page"},
            { choice: "Links a stylesheet to an HTML document"},
            { choice: "None of the above"}
        ],
        correct: "Stores all kinds of information"
    },
    {
        question: "Where do you link an external JavaScript file in an HTML doc?",
        answers: [
            { choice: "In the head element"},
            { choice: "In the body"},
            { choice: "Links a stylesheet to an HTML document"},
            { choice: "In the README"}
        ],
        correct: "In the body"
    },
    {
        question: "What is considered an object in JavaScript?",
        answers: [
            { choice: "variables"},
            { choice: "arrays"},
            { choice: "methods"},
            { choice: "All of the above"}
        ],
        correct: "All of the above" 
    },
    {
        question: "What is the traditional way to write general JavaScript called?",
        answers: [
            { choice: "camelCase"},
            { choice: "semantic"},
            { choice: "function-based"},
            { choice: "pseudo-code"}
        ],
        correct: "camelCase"
    },
    {
        question: "Was this quiz hard to make?",
        answers: [
            { choice: "Yep"},
            { choice: "Nah, it was easy."},
            { choice: "See choice one"},
            { choice: "Not choice two"}
        ],
        correct: "Yep"
    }
];


// Start Game event listener
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

    if(secondsLeft <= 0 || currentQuestionIndex > 4) {
        clearInterval(timerInterval);
        questionSpace.innerHTML = "Your score: " + score;
        answerSpace.innerHTML = "";
        initials.style.display = "block";
        timeEl.textContent = "";
        scoreEl.style.display = "none";
        playAgain.style.display = "block";
    };
    }, 1000)
};

// Question cycle
function questionCycle(){
    resetAnswers();
    var currentQuestion = questions[currentQuestionIndex];
    var questionNumb = currentQuestionIndex + 1;
    questionSpace.innerHTML = questionNumb + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML = answer.choice;
        answerSpace.appendChild(button);

    button.addEventListener("click", nextQuestion);


    });
}

// Goes to next question, score function, penalty function
function nextQuestion(event) {
    if(event.target.textContent === questions[currentQuestionIndex].correct) {
        score = score + 10;
        scoreEl.textContent = "Your score: " + score;
    } else {
        secondsLeft = secondsLeft - 10;
        timeEl.textContent = secondsLeft + " seconds remaining."; // Makes the changes render faster, totally optional to include
        };

    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        questionCycle();
    };
};

// Appends answers in place of previous question
function resetAnswers(){
    while(answerSpace.firstChild){
        answerSpace.removeChild(answerSpace.firstChild);
    }
};

playAgain.addEventListener("click", function() {
    location.reload();
});