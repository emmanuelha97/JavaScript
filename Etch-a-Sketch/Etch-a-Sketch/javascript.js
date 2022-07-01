//initiliaze the document selectors globally
const slider = document.getElementById('size');
const sliderDisplay = document.getElementById('sliderDisplay');
const rainbowButton = document.getElementById('rainbowMode');
const game = document.querySelector(".game");
const clearBoardButton = document.getElementById('clearBoard');

//initialize variables
let sizeOfEachSquare = 10; 
let amountOfSquares = 2500;
// let amountOfSquares = 10000;
//random array of colors
let colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
//check if rainbow mode is on or off
let rainbowModeOn = false; 
//slider options array
let sliderOptions = [250, 125, 100, 50, 25, 10, 5];
let sliderDisplayOptions = ["2x2", "4x4", "5x5", "10x10", "20x20", "50x50", "100x100"];

//function to check the slider each time it is moved
let checkSlider = (e) => {
    let value = document.getElementById('size').value;
    sliderDisplay.textContent = `Size ${sliderDisplayOptions[value]}`;
    sizeOfEachSquare = sliderOptions[value];
    console.log('sizeOfEachSquare', sizeOfEachSquare);
    amountOfSquares = (250000 / (Math.pow(sizeOfEachSquare, 2)));
    console.log('amountOfSquares', amountOfSquares);
    removeSquares();
    createGame();
    addHover();
}
//add event listener to the element
slider.addEventListener('change', () => {
    checkSlider();
})

//function to clear the board
let clear = () => {
    const gameSquares = document.querySelectorAll('.square');
    gameSquares.forEach(item => item.style.background = 'white');
}
//add event listener to the element
clearBoardButton.addEventListener('click', () => {
    //call function to clear when clicked
    clear();
    clearBoardButton.style.background = 'white';
    setTimeout( ()=> {
        clearBoardButton.style.background = 'lightgreen';
    }, 100)
})

//function to turn on rainbow mode
let turnRainbow = () => {
    if (rainbowModeOn === false) {
        rainbowModeOn = true;
        rainbowButton.style.background = 'green';
    } else {
        rainbowModeOn = false;
        rainbowButton.style.background = 'rgb(184, 43, 231)';
    }
}
//add event listener to the element
rainbowButton.addEventListener('click', () => {
    //changes rainbow value to true or false
    turnRainbow();
})

//remove squares before adding new ones
let removeSquares = () => {
    while(game.firstChild) {
        game.removeChild(game.firstChild);
    }
}
//creates the game with predetermined values 
let createGame = () => {
    for (let i = 0; i < amountOfSquares; i++) {
        const gameSquare = document.createElement('div');
        gameSquare.classList.add('square');
        gameSquare.setAttribute('id', `sq-${i}`);
        gameSquare.setAttribute("style", `height:${sizeOfEachSquare}px; width:${sizeOfEachSquare}px`);
        game.appendChild(gameSquare);
    }
}
//initialize the game on the first load
createGame();

let addHover = () => {
    const gameSquares = document.querySelectorAll('.square');
    gameSquares.forEach(square => {
        square.addEventListener('mouseenter', (e) => {
            if (rainbowModeOn !== false) {
                //assign random number from 0 - length
                let randomNumber = Math.floor(Math.random() * (colors.length));
                e.target.style.background = `${colors[randomNumber]}`;
            } else {
                e.target.style.background = 'black';
            }

        })
    })
}

addHover();


//size of game container 
// 500 x 500 = 250,000
//size of current square
// 30 * 30 = 
// 20 x 20 = 400
// 10 x 10 = 100
// 2500
// 250,000 / 400 = 625
// 250,000 / (L * W) =  X (for loop limit)
//(L * W) = size of square
//Total amount of squares
//600
//left to right = 25
//top to bottom = 25
let determinePossibleSizez = (limit) => {
    let i = 0;
    let solution = [];
    while (i < limit) {
        if ((limit % (i * i)) === 0) {
            solution.push(i);
        }
        i++;
    }
    return solution;
}
// console.log(determinePossibleSizez(250000))

