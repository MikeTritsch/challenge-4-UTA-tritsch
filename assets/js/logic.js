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
var secondsLeft = 60;
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

function nextQuestion(event) {
    if(event.target.textContent === questions[currentQuestionIndex].correct) {
        score++;
        scoreEl.textContent = "Your score: " + score;
    } else {
            secondsLeft = secondsLeft - 10;
            timeEl.textContent = secondsLeft + " seconds remaining.";
        }
    console.log(questions[currentQuestionIndex].correct);

    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        questionCycle();
    }else{
        return;
    }
};

function resetAnswers(){
    while(answerSpace.firstChild){
        answerSpace.removeChild(answerSpace.firstChild);
    }
}

console.log(questions[0].answers[0].correct);

// function scoreFunct() {
//     if(questions[currentQuestionIndex].answers.correct == true){
//         score++;
//     } else {
//         secondsLeft--;
        
//     }
// };