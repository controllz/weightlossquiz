// Give each question a value or id
function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var question11 = document.quiz.question11.value;
    var question12 = document.quiz.question12.value;
    var question13 = document.quiz.question13.value;
    var question14 = document.quiz.question14.value;
    var question15 = document.quiz.question15.value;
    var question16 = document.quiz.question16.value;
    var question17 = document.quiz.question17.value;
    var question18 = document.quiz.question18.value;
    var question19 = document.quiz.question19.value;
    var question20 = document.quiz.question20.value;


    //  "++" means to increment by one. Inversely "--" means decrement.

    var correct = 0;
    if (question1 == "strength training") {
        correct++;
    }
    if (question2 == "protein") {
        correct++;
    }
    if (question3 == "sleep") {
        correct++;
    }
    if (question4 == "vinegar") {
        correct++;
    }
    if (question5 == "fat") {
        correct++;
    }
    if (question6 == "green tea and water") {
        correct++;
    }
    if (question7 == "fiber") {
        correct++;
    }
    if (question8 == "blood sugar levels") {
        correct++;
    }
    if (question9 == "aerobic exercise") {
        correct++;
    }
    if (question10 == "metabolism") {
        correct++;
    }
    if (question11 == "high intensity interval training") {
        correct++;
    }
    if (question12 == "probiotics") {
        correct++;
    }
    if (question13 == "iron") {
        correct++;
    }
    if (question14 == "fasting") {
        correct++;
    }
    if (question15 == "nuts") {
        correct++;
    }
    if (question16 == "alcohol") {
        correct++;
    }
    if (question17 == "fullness") {
        correct++;
    }
    if (question18 == "high-fiber") {
        correct++;
    }
    if (question19 == "nutrients") {
        correct++;
    }
    if (question20 == "caffeine") {
        correct++;
    }



    //message range = best, better, BAD!
    var messages = ["Great Job!", "You can do better", "Go study again!", "PERFECT SCORE!"];
    //pictures range = 0,1,2
    var pictures = ["img/best.gif", "img/better.gif", "img/bad.gif", "img/perfect.gif"];


    var range;

    //Depending on the number correct, asign an image and message from the range

    if (correct < 10) { //thumbs down
        range = 2;
    }
    if (correct > 9 && correct < 14) { //so so
        range = 1;
    }
    if (correct > 13 && correct < 20) { //well done
        range = 0;
    }
    if (correct > 19) { //perfect score
        range = 3;
    }

    //onClick send these elements to the score div
    document.getElementById("score").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You Scored " + correct + " of 20 possible points.";
    document.getElementById("picture").src = pictures[range];

}


//modal