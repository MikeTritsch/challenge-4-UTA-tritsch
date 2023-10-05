// Variables
var timeEl = document.querySelector(".timer");
var scoreEl = document.querySelector(".scoreCard");
var startGame = document.querySelector("#startButton");
var instructions = document.querySelector(".instructions");
var gameSpace = document.querySelector(".gamespace");
var questionSpace = document.getElementById("questionSpace");
var answerSpace = document.getElementById("answerSpace");
var initials = document.getElementById("initialsForm");
var initialSection = document.querySelector("#initialSection");
var initialForm = document.querySelector('#initials')
var playAgain = document.querySelector("#playAgain");
var currentQuestionIndex = 0;
var score = 0;
var secondsLeft = 60;

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
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: [
            { choice: "var"},
            { choice: "variable"},
            { choice: "int"},
            { choice: "declare"}
        ],
        correct: "var"
    },
    {
        question: "What does the 'DOM' stand for in the context of web development?",
        answers: [
            { choice: "Data Object Model"},
            { choice: "Document Object Model"},
            { choice: "Dynamic Object Model"},
            { choice: "Decentralized Object Model"}
        ],
        correct: "Document Object Model"
    },
    {
        question: "How do you make something appear in the console?",
        answers: [
            { choice: "console.display"},
            { choice: "console.addText"},
            { choice: "console.log"},
            { choice: "console.show"}
        ],
        correct: "console.log"
    },
    {
        question: "What answer contains all JavaScript operators?",
        answers: [
            { choice: "+ $ % @"},
            { choice: "* / + %"},
            { choice: "add ^ @ -"},
            { choice: "None of the above"}
        ],
        correct: "* / + %"
    },
    {
        question: "When was JavaScript created?",
        answers: [
            { choice: "2009"},
            { choice: "1980"},
            { choice: "1995"},
            { choice: "2000"}
        ],
        correct: "1995"
    },
    {
        question: "Which of the following is a data type in JavaScript?",
        answers: [
            { choice: "currency"},
            { choice: "boolean"},
            { choice: "tally"},
            { choice: "check"}
        ],
        correct: "boolean"
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

    if(secondsLeft <= 0 || currentQuestionIndex > 9) {
        clearInterval(timerInterval);
        questionSpace.textContent = "Your score: " + score;
        answerSpace.textContent = "";
        initialSection.style.display = "block";
        timeEl.textContent = "";
        scoreEl.style.display = "none";
        playAgain.style.display = "flex";
    };
    }, 1000)
};

// Question cycle
function questionCycle(){
    resetAnswers();
    var currentQuestion = questions[currentQuestionIndex];
    var questionNumb = currentQuestionIndex + 1;
    questionSpace.textContent = questionNumb + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        button.textContent = answer.choice;
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

initials.addEventListener("submit", (e) => {
    e.preventDefault();
    var highScore = JSON.parse(localStorage.getItem("High Scores")) || [];
    var init = document.getElementById("initials");
    highScore.push({init: init.value, score:score});
    localStorage.setItem("High Scores", JSON.stringify(highScore));
    initialSection.textContent = "Thanks for playing!";
});

