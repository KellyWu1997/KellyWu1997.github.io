const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

theTimer.innerHTML = "00 : 00 : 00";
var timeTracker;

var index = 0;
var inputValue = testArea.value;
var originalValue = originText.value;
var timeDisplay = [];
    timeDisplay[3] = 0;
	timeDisplay[2] = 0;
	timeDisplay[1] = 0;
	timeDisplay[0] = 0;

var text = [];
text[0] = "Welcome to the Speed Test"
text[1] = "THERe are 2 apples IN ThE basKET."
text[2] = "BaNANA, Apple & BLUEberry ARE my favORITE FruitS!!"
text[3] = "I DON't like... UMMMM manGOS, I JUst Don'T LIke the taSTe."
text[4] = "PLEase call Me at #99904923, my Name is 'Kelly'."

var button = document.querySelector("#change-text");

var textIndex = 0;

//Time is increasing
function increaseTime2(){
	timeDisplay[3]++;
	timeDisplay[2] = timeDisplay[3] % 100;

	if(timeDisplay[2] < 10){
		return "0" + timeDisplay[2];
	}

    return timeDisplay[2];
}

function increaseTime1(){

	timeDisplay[1] = Math.floor(timeDisplay[3] / 100) % 60;

	if(timeDisplay[1] < 10){
		return "0" + timeDisplay[1];
	}

	return timeDisplay[1];
}

function increaseTime0(){
	timeDisplay[0] = Math.floor(timeDisplay[3] / 100 / 60) % 60;

	if(timeDisplay[0] < 10){
		return "0" + timeDisplay[0];
	}

	return timeDisplay[0];
}


// Run a standard minute/second/hundredths timer:
function TimerRun(){
	
	console.log("Timer is running");

	timeTracker = setInterval(function(){theTimer.innerHTML = increaseTime0() + " : " + increaseTime1() + " : " + increaseTime2()}, 10);
}


// Match the text entered with the provided text on the page:
function startMatching(){
	let textEntered = testArea.value;
	let originTextMatch = originText.substring(0,textEntered.length);

	if(textEntered == originText){
		document.querySelector("#display-area h2").innerHTML = "Congrats! You've made it. You can do it again by clicking on Start Over!";
		testWrapper.style.borderColor = "green";
		clearInterval(timeTracker);
		
	}

	else{
		if(textEntered == originTextMatch){
			testWrapper.style.borderColor = "#F3F8F9";
			document.querySelector("#display-area h2").innerHTML = "Good job! <br> Keep going!";

		}

		else{
			testWrapper.style.borderColor = "#E95D0F";
			document.querySelector("#display-area h2").innerHTML = "Oops! <br> There are mistakes!";
		}
	}

}

// Start the timer:
function startTimer(){
	console.log("Just pressed down");

	if(testArea.value.length == 0){
		TimerRun();
	}
}



// Reset everything:
function startOver(){
	timeDisplay[3] = 0;
	timeDisplay[2] = 0;
	timeDisplay[1] = 0;
	timeDisplay[0] = 0;
	clearInterval(timeTracker);
	document.querySelector("#test-area").value = null;
	theTimer.innerHTML = "00 : 00 : 00";
}



// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress",startTimer,false);
testArea.addEventListener("keyup",startMatching,false);

//function to change text

function changeText(e){
	document.querySelector("#origin-text p").innerHTML = text[textIndex];

    if(textIndex<4){
		textIndex++;
	}

	else{
		textIndex = 0;
	}
}

button.addEventListener("click",changeText,false);
resetButton.addEventListener("click", startOver, false);

