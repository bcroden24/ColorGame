var numOfSquares = 6;
var colors = [];
var pickedColor;

// variables set to selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init() {

    // mode button event listeners
    setupModeButtons();

    // setup square event listeners
    setupSquareEvents();

    reset(); // call reset to init variables and update display
}

function setupModeButtons() {
    // add events for mode buttons
    for(var i=0; i<modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function() {
            // remove selected class from both buttons
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            // add selected class to the button clicked
            this.classList.add("selected");

            // figure out how many squares to show
            if(this.textContent === "Easy") {
                numOfSquares = 3;
            }
            else {
                numOfSquares = 6;
            }

            // reset game with new data
            reset();
        });
    }
}

function setupSquareEvents() {
    // loop through squares, set background color and events
    for(var i=0; i<squares.length; i++) {
        // squares[i].style.backgroundColor = colors[i];   // set color

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
                this.style.backgroundColor = "#232323";     // fade out incorrect square
                messageDisplay.textContent = "Try Again";
            }

        });
    }
}

// reset for new game
function reset() {
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
    resetBtn.textContent = "NEW COLORS";
    // reset display message
    messageDisplay.textContent = "";

    // update squares diplay
    for(var i=0; i < squares.length; i++) {
        if(colors[i]) {     // if there is a color then
            squares[i].style.backgroundColor = colors[i];   // set new color
            squares[i].style.display = "block"; // set visible
        }
        else {
            squares[i].style.display = "none"; // set invisible
        }
    }

}



resetBtn.addEventListener("click", function() {
    reset();
});




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