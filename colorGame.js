// // in the future, change to module design pattern //

// var game = {}; //create game object
// game.init = function(){ //define functions in game object
// 	setUpModeButtons();
// 	setUpSquares();
// 	reset();
// }

// game.init(); //execute function at the end of your code

// //helps keep things structred and organized as well as avoid namespace issues




var	numSquares   = 6; //start game at level "hard" with 6 squares being displayed
var colorsArray  = [];//generateRandomColors(numSquares);  //generate array of RGB colors
var pickedColor; //pickColor(); // change name to "winning color" instead?

var squares 	 = document.querySelectorAll(".square"); //each square to be colored
var colorDisplay = document.getElementById("colorDisplay"); //span to display winning color
var messageDisplay = document.querySelector("#message");// span to display "correct"/"try again"
var h1 			 = document.querySelector("h1"); //Game title as well as the RGB to be found
var resetButton  = document.querySelector("#reset"); 
var modeButtons  = document.querySelectorAll(".mode");
init();



resetButton.addEventListener("click", function(){
	reset();
});


function init(){ // organize code that needs to be run on page load, loose code on page can be placed here
	setUpModeButtons();
	setUpSquares();
	reset();
}


function setUpModeButtons(){
//easy/hard mode button event listeners
	for(var i = 0; i < modeButtons.length; i++){ //allow for addition of medium difficulty later
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");//remove selected class from both buttons
			this.classList.add("selected"); //add it on to the one that was just clicked
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}	

}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){    

		squares[i].addEventListener("click", function(){//add click listeners to squares
			var clickedColor = this.style.background;//grab color of clicked square
			if(clickedColor === pickedColor){//compare color to pickedColor
				messageDisplay.textContent = "Correct"; //update messageDisplay 
				changeColors(clickedColor);//change all squares to winning color
				h1.style.background = clickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.background = "#232323"; //change background color to hide square
				messageDisplay.textContent = "Try Again"; //update messageDisplay 
			}
		}); 
	}	

}

function changeColors(colorSent){
	for(var i=0; i < squares.length; i++){//loop through all squares 
		squares[i].style.background = colorSent; //give ALL squares a given color 
		//  !!!   update to exclude the correct one
	}
}

function pickColor(){ //pick winning square -- not randomize color
	var random = Math.floor(Math.random() * colorsArray.length); 
		//math.random will give random decimal 
		//multiply by length of array (returns value no larger than length of array)
		//choose length of array so allow for flexibility (easy / hard option for game)
		//math.floor will truncate to a whole number - always round down
	
	return colorsArray[random];	
}


function generateRandomColors(num){

	var arr = []; //make an array
	for(var i = 0; i < num; i++){ //repeat num times
		
		arr.push(randomColor())//get random color & push into array
	}	
	// add num random colors to array
	return arr;//return that array
}

function randomColor(){
	var r = Math.floor(Math.random() * 256); //pick a "red" from 0 - 255
	var g = Math.floor(Math.random() * 256);//pick a "green" from 0 - 255
	var b = Math.floor(Math.random() * 256);//pick a "blue" from 0 - 255
	//rgb("r, g, b");
	return "rgb(" + r + ", " + g + ", " + b + ")";

}

function reset(){
	//this function needs to.... 	
		//figure out how many squares to show
		//pick new colors
		//pick a new "picked color"
		//update page to reflect changes
	colorsArray = generateRandomColors(numSquares);//generate all new colors
	pickedColor = pickColor();// pick a new random color from array
	colorDisplay.textContent = pickedColor;//change color display to match picked Color;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	h1.style.background = "steelblue";

	for(var i = 0; i < squares.length; i++){     //assign color to squares

		if(colorsArray[i]){ //if there is something inside colorsArray at that index, continue
			squares[i].style.display = "block"; //show square
			squares[i].style.background = colorsArray[i]; //change color
		}else{ //if there is no data in array at index
			squares[i].style.display = "none";  //hide that square
		}
	}
}
