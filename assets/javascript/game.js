$(document).ready(function () {

    var userScore = 0;
    var wins = 0;
    var losses = 0;

    var randomNum = Math.floor(Math.random() * (101) + 19);
    console.log(randomNum);
    updateStats();

    function startgamefunction() {
        $("#red-image").attr("data-value", (Math.floor(Math.random() * 11) + 1));
        $("#blue-image").attr("data-value", (Math.floor(Math.random() * 11) + 1));
        $("#green-image").attr("data-value", (Math.floor(Math.random() * 11) + 1));
        $("#yellow-image").attr("data-value", (Math.floor(Math.random() * 11) + 1));
    }
    startgamefunction();


    $(".crestimg").on("click", function () {
        var imageValue = $(this).data("value");
        userScore += imageValue
        console.log(imageValue);
        updateStats();
        checkScore();
    });

    function checkScore() {
        if (userScore === randomNum) {
            wins++;
            resetGame();
            updateStats();
        } else if (userScore > randomNum) {
            losses++;
            resetGame();
            updateStats();
        }
    }

    function resetGame() {
        randomNum = Math.floor(Math.random() * (101) + 19);
        userScore = 0;
    }


    function updateStats() {
        $("#target-score").text(randomNum);
        $("#user-score").text(userScore);
        $("#wins").text(wins);
        $("#losses").text(losses);
    }

    var audio = document.getElementById("#theme-audio")
    $(".playaudio").on("click", function () {
        // var audio = document.getElementById("#theme-audio")
        console.log(audio);
        audio.play();
    });
    $(".pauseaudio").on("click", function () {
        audio.pause();
    });

});