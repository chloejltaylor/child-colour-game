var coloursArray = ["red","blue","yellow","green","purple","orange","white","black","pink"];
var coloursCount= coloursArray.length;
var colours = generateRandomColours(6);
var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay= document.getElementById("colourDisplay");
var messageDisplay= document.getElementById("message");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");

resetButton.addEventListener("click", function(){
	//generate all new colours
	colours = generateRandomColours(6);
	//pick a new random colour from array
	pickedColour = pickColour();
 	// change colour colourDisplay to match picked colour
 	messageDisplay.textContent = "Can you find the "+pickedColour+" square?";
	colourDisplay.textContent = pickedColour;
//reset message

	//change the colours of the squares on the page
	for (i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colours[i];
	}
body.style.background = "#787878"
})

colourDisplay.textContent = pickedColour;



for(var i=0;i<squares.length; i++){
// 	//add initial colours to squares
	squares[i].style.backgroundColor = colours[i];

// 	//add click listeners to squares
	squares[i].addEventListener("click", function(){
// 		// grab colour of clicked sqaure
		var clickedColour = this.style.backgroundColor;


// //compare colour to picked colour
		if(clickedColour === pickedColour)	{
			messageDisplay.textContent = "You did it!";
// 			// changeColours(clickedColour);
			body.style.backgroundColor = clickedColour;
// 	// 		resetButton.textContent = "Play again";	

		for(var i=0;i<squares.length; i++){
			squares[i].style.backgroundColor = pickedColour;
		}
}
 else {
			this.style.backgroundColor = "#787878";
			// messageDisplay.textContent = "Try again";
			// alert("no");
}
		}
		)
}


function randomColour(){
	var randomColoursArray = [];
	var tempColoursArray = coloursArray.slice(0,coloursCount);
	for (var i=0;i<coloursCount;i++){
	var colIndex = Math.floor(Math.random()*tempColoursArray.length);
	var colourToDelete = (tempColoursArray[colIndex]);
	tempColoursArray.splice(colIndex,1);
	randomColoursArray.push(colourToDelete);
	
}
return randomColoursArray;
}


function generateRandomColours(num){
var newArray = randomColour();
var finalColoursArray = newArray.slice(0,num);
console.log("Final Array: "+finalColoursArray);
return finalColoursArray;
}


function pickColour(){
	var random = Math.floor(Math.random()* colours.length);
	return colours[random];
}