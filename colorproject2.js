var numSquares = 6;
var colors = []; // how many color to generate in the arr
var pickedColors;
var message = document.querySelector('#message')
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector("#reset"); 
var modeButtons = document.querySelectorAll(".mode")


init();

function init() {
	//mode buton events listeners
	setUpModeButtons();
	setUpSquares();
	reset();

}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick new random color from arr
	pickedColors = pickColors();
	//change colorDisplay to match pickColor 
	colorDisplay.textContent = pickedColors;
	//reflect thos new colors chose on the squares 
	for(var i = 0; i < squares.length; i++) {
	//if there is a color
	if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
	} else {
		squares[i].style.display= "none";
	}
	  
 }
 	h1.style.backgroundColor = "steelblue";
 	resetButton.textContent = "New Colors";
 	message.textContent = "";
}



//function to change all square to correct color 
function changeColors(color){
  for(var i = 0; i<squares.length; i++){
  squares[i].style.backgroundColor = color;
 }
};

//generate random color
function pickColors(){
	var random = Math.floor(Math.random() * colors.length); 
	//use variable random to access array --> index
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num either 6 or 3 times to the array value 
	for(var i = 0; i < num; i++){
	 //get random color and push into arr
	  arr.push(randomColor())
	
	}
	//return array 
	return arr;
}

function randomColor(){
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}

resetButton.addEventListener("click" , function(){
	reset();

})

function setUpModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//ternary operator
			this.textContent ==="Easy" ? numSquares = 3: numSquares = 6;
			reset();
	    });
	}

}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++) {
	  //add click listners to squares
	  squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor; 
		if(clickedColor === pickedColors){
			message.textContent = "Correct!";
		 	changeColors(clickedColor);
		 	h1.style.background = clickedColor;
		 	resetButton.textContent = "Play Again?"
		} else { 
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again!";
		}	
	  });
	}
	
	reset ();
}




