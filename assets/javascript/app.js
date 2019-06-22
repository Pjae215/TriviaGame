// array of questions, choices and answers
var choices = [["1000", "100", "1", "10"], ["14", "12", "72", "36"], ["5", "6", "9", "3"], ["1", "5", "0", "50"], ["22", "34", "36", "24"]];
var rightanswers = ["100", "12", "9", "0", "24"];
var listOfQuestions = ["1. What is 10x10?", "2.What is the square root of 144? ", "3. What is 3 squared?", "4. What is 5 x 0?", "5. What is 72 divided by 3?"];

//assign variables for questions, choices, answers and totals
var numQuestions = $(".Questions");
var numAnswers = $(".Answers");
var questionElement = document.getElementById("Question");
var questionCount = 0;
var score = 0;

//for restart
function resetButton(){
location.reload();
}
//

// function starttimer() {
// 	var timer = getSeconds();
// 	document.getElementById("seconds");
// 	setInterval(function() {
// 	timer--;
// 	   if (timer >= 0) {
// 		  document.getElementById("seconds");
// 		  span.innerHTML = timer;

// 	   }
// 	   if (timer === 60) {
// 		  alert('sorry, out of time');
// 		  clearInterval(timer);
// 		}
// 	  }, 1000);
//  }




//call function for when start button is clicked...will hide image and button and show totals
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
	   //start timer 
		// show questions and answers
		showQuestionsAndAnswers();
		starttimer();
	}
}
// //makes question/answer div visible
function showQuestionsAndAnswers() {
	questionElement.innerHTML = listOfQuestions[questionCount];
	document.getElementById("Question").style.visibility = "visible";
	document.getElementById("1").innerHTML = choices[questionCount][0];
	document.getElementById("2").innerHTML = choices[questionCount][1];
	document.getElementById("3").innerHTML = choices[questionCount][2];
	document.getElementById("4").innerHTML = choices[questionCount][3];
	for(var i =0; i<numAnswers.length; i++) {
		numAnswers[i].style.visibility = "visible";
	}
}
//match index of questions/choices/answers from arrays
function checkAnswer(number) {
	questionCount++;
		for(var i =0; i<numAnswers.length; i++) {
				numAnswers[i].style.visibility = "false";
			}
		var answer = document.getElementById(number).innerHTML;
		if (rightanswers.indexOf(answer) != -1) {
			score ++;
		}
		document.getElementById("score").innerHTML = score;
	if (questionCount<5) {
		showQuestionsAndAnswers();
		document.getElementById(number).blur();
	} else {
		setTimeout(function() {
			alert("You scored " + score + " out of 5.  Game Over!");
		}, 5);
		setTimeout(function() {
			resetButton();
		}, 5)
	
	}
}

