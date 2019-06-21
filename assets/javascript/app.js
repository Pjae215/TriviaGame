var answers = [["1000", "100", "10", "1"], ["14", "72", "12", "36"], ["5", "6", "9", "3"], ["1", "5", "0", "50"], ["22", "34", "36", "24"]];
var listOfCorrectAnswers = ["100", "12", "9", "0", "24"];
var listOfQuestions = ["1. What is 10x10?", "2.What is the square root of 144? ", "3. What is 3 squared?", "4. What is 5x0?", "5. What is 72 divided by 3?"];


var numQuestions = document.getElementsByClassName("Questions");
var numAnswers = document.getElementsByClassName("Answers");
var submitButton = document.getElementById("submitanswers");
var questionElement = document.getElementById("Question");
var questionCount = 0;
var score = 0;

function startButton() {
	//show the score
	document.getElementById("score").innerHTML = score;
	var startClass = document.getElementById("startbutton").className;
	if (startClass == "start") {
		//hide other things
		document.getElementById("image").style.width = "0px";
      document.getElementById("image").style.height = "0px";
	   document.getElementById("startbutton").style.visibility = "hidden";
		//show scores
	   document.getElementById("preScore").style.visibility = "visible";
	   document.getElementById("theScore").style.visibility = "visible";
		// show questions and answers
		showQuestionsAndAnswers();
	}
}
function showQuestionsAndAnswers() {
	questionElement.innerHTML = listOfQuestions[questionCount];
	document.getElementById("Question").style.visibility = "visible";
	document.getElementById("1").innerHTML = answers[questionCount][0];
	document.getElementById("2").innerHTML = answers[questionCount][1];
	document.getElementById("3").innerHTML = answers[questionCount][2];
	document.getElementById("4").innerHTML = answers[questionCount][3];
	for(var i =0; i<numAnswers.length; i++) {
		numAnswers[i].style.visibility = "visible";
	}
}

function checkAnswer(number) {
	questionCount++;
		for(var i =0; i<numAnswers.length; i++) {
				numAnswers[i].style.visibility = "false";
			}
		var answer = document.getElementById(number).innerHTML;
		if (listOfCorrectAnswers.indexOf(answer) != -1) {
			score ++;
		}
		document.getElementById("score").innerHTML = score;
	if (questionCount<5) {
		showQuestionsAndAnswers();
		document.getElementById(number).blur();
	} else {
		setTimeout(function() {
			alert("You scored " + score + " out of 5.");
		}, 5);
	}
}