var highScore = JSON.parse(localStorage.getItem("High Scores")) || [];

highScore.sort(function(a,b) {
    return b.score - a.score
});

for(var i = 0; i < highScore.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = highScore[i].init + " - " + highScore[i].score;
    document.querySelector("ol").append(liEl);
};