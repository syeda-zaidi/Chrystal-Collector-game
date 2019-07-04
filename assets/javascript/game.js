$(document).ready(function () {

    var userScore = 0;
    var wins = 0;
    var losses = 0;

    var randomNum = Math.floor(Math.random() * (101) + 19);
    console.log(randomNum);
    updateStats();

    // var Images = {
    //     redImage: {
    //         value: 0,
    //     },
    //     blueImage: {
    //         value: 0,
    //     },
    //     greenImage: {
    //         value: 0,
    //     },
    //     yellowImage: {
    //         value: 0,
    //     }
    // };

    function startGameFunction() {
        // Images.redImage.value = (Math.floor(Math.random() * 11) + 1);
        // Images.blueImage.value = (Math.floor(Math.random() * 11) + 1);
        // Images.greenImage.value = (Math.floor(Math.random() * 11) + 1);
        // Images.yellowImage.value = (Math.floor(Math.random() * 11) + 1);

        $("#red-image").attr("data-value", (Math.floor(Math.random() * 11) + 1));
        $("#blue-image").attr("data-value", (Math.floor(Math.random() * 11) + 1));
        $("#green-image").attr("data-value", (Math.floor(Math.random() * 11) + 1));
        $("#yellow-image").attr("data-value", (Math.floor(Math.random() * 11) + 1));
    };
    startGameFunction();

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
        startGameFunction();
    }


    function updateStats() {
        $("#target-score").text(randomNum);
        $("#user-score").text(userScore);
        $("#wins").text(wins);
        $("#losses").text(losses);
    }

    
    // var themeAudio = document.createElement("audio");
    // themeAudio.setAttribute("src", "assets\images\Harry Potter Theme Song.mp3");

    // $(".playaudio").on("click", function() {
    //     themeAudio.play();
    // });

    // $(".pauseaudio").on("click", function() {
    //     themeAudio.pause();
    // });

});