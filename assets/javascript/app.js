// array of questions, choices and answers
var choices = [["1000", "100", "1", "10"], ["14", "12", "72", "36"], ["5", "6", "9", "3"], ["1", "5", "0", "50"], ["22", "34", "36", "24"], ["19", "3", "5", "4"], ["-3", "8", "2", "15"], ["19", "20", "21", "22"], ["1", "11", "42", "13"], ["1", "5", "-1", "-2"]];
var rightanswers = ["100", "12", "9", "0", "24", "4", "2", "21", "13", "-1" ];
var listOfQuestions = ["1. What is 10x10?", "2. What is the square root of 144? ", "3. What is 3 squared?", "4. What is 5 x 0?", "5. What is 72 divided by 3?", "6. How many times can 36 be divided by 9?", "7. If you have 5 apples and you give 3 away, how many apples do you have left?", "8. What is 7x3 ?", "9. If 6+6 is 12, what is 6+7 ?", "10. What is 1+1-3?"];

//assigning globals for questions, choices, answers, timers and totals
var numQuestions = $(".Questions");
var numAnswers = $(".Answers");
var questionElement = document.getElementById("Question");
var questionCount = 0;
var score = 0;
var timer = 30;

//defining reset function
function resetButton(){
location.reload();
}

//call function for when start button is clicked...will hide image and button, show totals start timer
function startButton() {
	console.log("gamestarted");
	//show the score
	document.getElementById("score").innerHTML = score;
	var startClass = document.getElementById("startbutton").className;
	if (startClass == "start") {
		//hide other things
		document.getElementById("image").style.width = "0px";
      document.getElementById("image").style.height = "0px";
	   document.getElementById("startbutton").style.visibility = "hidden";
		//show scores and time remaining
	   document.getElementById("preScore").style.visibility = "visible";
	   document.getElementById("theScore").style.visibility = "visible";
	   document.getElementById("Time").style.visibility = "visible";
	   //start timer ******
	   var downloadTimer = setInterval(function(){
		document.getElementById("seconds").innerHTML = timer;
		timer -= 1;
		if(timer <= 0){
		  clearInterval(downloadTimer);
		  alert("You ran out of time. Please try again.")
		  resetButton();
		}
	  }, 1000);
		// show questions and answers
		showQuestionsAndAnswers();
	
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
	if (questionCount<10) {
		showQuestionsAndAnswers();
		document.getElementById(number).blur();
	} else {
		setTimeout(function() {
			alert("You scored " + score + " out of 10.  Game Over!");
		}, 5);
		setTimeout(function() {
			resetButton();
		}, 5)
	
	}
}

