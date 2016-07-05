var	numSquares = 6; //start game at level "hard" with 6 squares being displayed
var colorsArray = generateRandomColors(numSquares);  //generate array of RGB colors


var squares = document.querySelectorAll(".square"); //each square to be colored
var pickedColor = pickColor(); // change name to "winning color" instead?
var colorDisplay = document.getElementById("colorDisplay"); //span to display winning color
var messageDisplay = document.querySelector("#message");// span to display "correct"/"try again"
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var hardButton = document.querySelector("#hard");
var easyButton = document.getElementById("easy");


easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	h1.style.background = "#232323";

	//create new colors to avoid potential of removing the "chosen" color from the page.
	numSquares = 3;
	colorsArray = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colorsArray[i]){ //if there is something inside colorsArray at that index, continue
			squares[i].style.background = colorsArray[i]; //change color
		}else{
			squares[i].style.display = "none";
		}
	}
})

hardButton.addEventListener("click", function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	h1.style.background = "#232323";
	//create new colors to avoid potential of removing the "chosen" color from the page.
	numSquares = 6;
	colorsArray = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colorsArray[i]; //change color
		squares[i].style.display = "block";
	}

})

resetButton.addEventListener("click", function(){
	colorsArray = generateRandomColors(numSquares);//generate all new colors
	pickedColor = pickColor();// pick a new random color from array
	colorDisplay.textContent = pickedColor;//change color display to match picked Color;
	
	for(var i = 0; i < squares.length; i++){     //assign color to squares
		squares[i].style.background = colorsArray[i]; //change colros of squares on page;
		} 
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	h1.style.background = "#232323";

});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){    
	squares[i].style.background = colorsArray[i];  //assign color to squares

	
	squares[i].addEventListener("click", function(){//add click listeners to squares
		var clickedColor = this.style.background;//grab color of clicked square
		if(clickedColor === pickedColor){//compare color to pickedColor
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);//change all squares to winning color
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			this.style.background = "#232323"; //change visibility to hide incorrect selection
			messageDisplay.textContent = "Try Again"; //add in display of "try again"
		}
	}); 
}

function changeColors(colorSent){
	for(var i=0; i < squares.length; i++){//loop through all squares 
		squares[i].style.background = colorSent; //give ALL squares a given color 
		//  !!!   update to exclude the correcto one
		
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