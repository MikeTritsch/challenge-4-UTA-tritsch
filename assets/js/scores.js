// Stores initials and score into localStorage to be used in leaderboard - Shout out to Meg Meyers for helping me write this code
var highScore = JSON.parse(localStorage.getItem("High Scores")) || [];

// Sorts scores from highest to lowest
highScore.sort(function(a,b) {
    return b.score - a.score
});

// Appends list from local storage array to the page
for(var i = 0; i < highScore.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = highScore[i].init + " - " + highScore[i].score;
    document.querySelector("ol").append(liEl);
};