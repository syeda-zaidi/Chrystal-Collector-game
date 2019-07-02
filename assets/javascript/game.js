$(document).ready(function () {

    var userScore = 0;
    var wins = 0;
    var losses = 0;

    var randomNum = Math.floor(Math.random() * (101) + 19);
    console.log(randomNum);
    updateStats();

    function startgamefunction() {
        $("#red-image").attr("value", Math.floor(Math.random() * 101) + 19);
        $("#blue-image").attr("value", Math.floor(Math.random() * 101) + 19);
        $("#green-image").attr("value", Math.floor(Math.random() * 101) + 19);
        $("#yellow-image").attr("value", Math.floor(Math.random() * 101) + 19)
    }
    startgamefunction()
    // var randomNum = (19 + Math.random * (120 - 19 + 1));
    // console.log(randomNum);

    $(".crestimg").on("click", function () {
        var imgvalue = $(this).val()
        userScore += imgvalue
        console.log($(this.value))
            ; alert("your new score is : " + userScore);
    });

    // $("#blue-image").on("click", function () {
    //     alert("you clicked ravenclaw house crest");
    //     userScore += 5;
    //     alert("your new score is : " + userScore);

    // });

    // $("#green-image").on("click", function () {
    //     alert("you clicked slytherin house crest");
    //     userScore += 7;
    //     alert("your new score is : " + userScore);

    // });

    // $("#yellow-image").on("click", function () {
    //     alert("you clicked hufflepuff house crest");
    //     userScore += 3;
    //     alert("your new score is : " + userScore);

    // });

    function updateStats() {
        $("#target-score").text(randomNum);
        $("#user-score").text(userScore);
        $("#wins").text(wins);
        $("#losses").text(losses);
    }





});