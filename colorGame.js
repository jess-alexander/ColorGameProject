var colorsArray = [ //hard coded for now - randomize later
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 0, 255)",
	"rgb(0, 255, 255)",
	"rgb(255, 0, 255)"
	]

var squares = document.querySelectorAll(".square"); //each square to be colored
var pickedColor = pickColor(); // change name to "winning color" instead?
var colorDisplay = document.getElementById("colorDisplay"); //span to display winning color
var messageDisplay = document.querySelector("#message");// span to display "correct"/"try again"

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){    
	squares[i].style.background = colorsArray[i];  //assign color to squares

	
	squares[i].addEventListener("click", function(){//add click listeners to squares
		var clickedColor = this.style.background;//grab color of clicked square
		if(clickedColor === pickedColor){//compare color to pickedColor
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);//change all squares to winning color
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

	