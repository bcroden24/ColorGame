
var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor; // set picked color rgb text


easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");

    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    // loop through squares
    for(var i=0; i < squares.length; i++) {
        if(colors[i]) {     // only true for first 3 colours because colors array is length 3 now
            squares[i].style.backgroundColor = colors[i];   // set new color
        }
        else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");

    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    // loop through squares
    for(var i=0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];   // set new color
        squares[i].style.display = "block"; // make all squares visible
      
    }
});

resetBtn.addEventListener("click", function() {
    // generate all new colors
    colors = generateRandomColors(numOfSquares);

    // pick new color from array
    pickedColor = pickColor();

    // change color display to match picked color
    colorDisplay.textContent = pickedColor;

    // change colors of squares
    for(var i=0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    // change h1 background color back to default
    h1.style.backgroundColor = "steelblue";
    // change reset button text back to inital value
    this.textContent = "NEW COLORS";
    // reset display message
    messageDisplay.textContent = "";

});


// loop through squares, set background color and events
for(var i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];   // set color

    // add click event
    squares[i].addEventListener("click", function() {
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor);
        // compare with picked color
        if(clickedColor === pickedColor) {
            // alert("Yay!");
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            // change reset button text
            resetBtn.textContent = "Play Again";
        }
        else {
            // alert("Nooo")
            // squares[i].classList.add("clicked");
            this.style.backgroundColor = "#232323";     // fade out incorrect square
            messageDisplay.textContent = "Try Again";
        }

    });
}

// loop through all squares and change all colours to correct colour
function changeColors(color)
{
    for(var i = 0; i<squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

// picks random index from colors array and returns that color
function pickColor() {
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];

    // add num random colors to array
    for(var i=0; i<num; i++) {
        // get random color and push to array
        arr[i] = randomColor();
        console.log(arr[i]);

    }

    // return the array
    return arr;
}

// return random rgb color
function randomColor() {
    // pick a red value from 0 to 255
    var r = Math.floor(Math.random() * 256);

    // pick green value from 0 to 255
    var g = Math.floor(Math.random() * 256);

    // pick blue value from 0 to 255
    var b = Math.floor(Math.random() * 256);

    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    return rgb;
}