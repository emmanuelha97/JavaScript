// let round = 2;
//create player factory function
const Player = (name, marker) => {
    //getters
    const getName = () => name;
    const getMarker = () => marker;
    //methods
    const placeMarker = (board, value) => {
        if (board.gameboard[value] === " ") {
            board.round++;
            console.log(`${name} is placing a marker(${marker}) at board[${value}]`);
            board.gameboard[value] = marker;
        }

    }
    const printInfo = () => {
        console.log(`'My name is:${name}, marker:${marker}`);
    }
    return {
        getName, getMarker, printInfo, placeMarker
    }
}

const Computer = (name, marker) => {
    const getName = () => name;
    const placeMarker = (board) => {
        let rand = Math.floor(Math.random() * 9);
        let tries = 0;
        while (board.gameboard[rand] !== " "){
            rand = Math.floor(Math.random() * 9);
            tries++;
            if(tries > 20){
                exit 
            }
        }
        console.log('rand', rand)
        if(board.gameboard[rand] === " "){
            board.round++;
            console.log(`Robot making move placing marker ${marker} at board[${rand}]`);
            board.gameboard[rand] = marker;
        }
    }

    return {getName, placeMarker}
}

let playerOne// = Player("Emmanuel", "x");
let playerTwo// = Player("Stacey", "o");
let gameWon = false;
// console.log('playerOne', playerOne === undefined)


//determine who will move first
const firstPlayer = (val) => {
    console.log('val', val)
    //grabs each players document element
    const playerO = document.getElementById('playerOne')
    const playerT = document.getElementById('playerTwo')
    let newVal = val.split(" ");
    //if human was chosen as the first player
    if (newVal[0] === "Human") {
        //human was chosen
        //make the startbutton green indicating game can start
        const startGameButton = document.getElementById('start-game');
        startGameButton.style.background = "green";
        if (newVal[1] === "(X)") {
            //X was chosen
            playerOne = Player("Emmanuel", "x");
            playerTwo = Player("Stacey", "o"); //Computer("Computer","o");
            playerO.style.color = "limegreen"
            playerT.style.color = "grey"
        } else {
            //O was chosen
            playerOne = Player("Emmanuel", "o");
            playerTwo =  Player("Stacey", "x"); //Computer("Computer", "x")
            playerT.style.color = "limegreen"
            playerO.style.color = "grey"
        }
    } else {
        //robot was chosen
    }
}

const highlightCurrentPlayer = () => {
    const playerOne = document.getElementById('playerOne')
    const playerTwo = document.getElementById('playerTwo')
    if (currentBoard.round % 2 === 0) {
        //playerone
        playerOne.style.color = "limegreen"
        playerTwo.style.color = "grey"
    } else {
        //playertwo
        playerTwo.style.color = "limegreen"
        playerOne.style.color = "grey"
    }
};

//create the board
const Gameboard = () => {
    let gameboard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

    let round = 2;

    const gameContainer = document.querySelector(".game-box");

    const clear = () => {
        for(let i = 0; i < gameboard.length; i++){
            gameboard[i] = " ";
        }
    }
    const print = () => {
        let children = gameContainer.children;
        console.log('children', children)
        for (let i = 0; i < 9; i++) {
            children[i].innerText = `${gameboard[i]}`;
        }
    }

    //on game load run this function
    const startGameChecker = () => {
        let playerChosen = false;
        //check for user choices
        const buttons = document.getElementsByClassName('buttons');
        console.log('buttons')
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                buttons[i].children[j].addEventListener('click', () => {
                    // console.log('buttons[i].children[j].innerText', buttons[i].children[j].innerText)
                    //add eventListener to each player button item to set first move 
                    firstPlayer(buttons[i].children[j].innerText)
                    playerChosen = true;
                })
            }
        }
        //if user has not made ay choices then do not play game
        //check for the start button and when clicked display game
        const startGameButton = document.getElementById('start-game');
        const gameBox = document.querySelector('.game-box');
        gameBox.style.visibility = "hidden"
        //if game was restarted then make start button visible
        if(startGameButton.style.visibility === "hidden"){
            startGameButton.style.visibility = "visible";
        }
        startGameButton.addEventListener('click', () => {
            //check if player one is undefined
            if (playerChosen !== false) {
                gameBox.style.visibility = "visible"
                startGameButton.style.visibility = "hidden"
            }
        })
    };
    startGameChecker();

    const addEventListenerF = () => {
        let spaceNum = 0;
        for (let i = 0; i < 9; i++) {
            const square = document.createElement('div');
            const squareText = document.createTextNode(`${gameboard[i]}`);
            // console.log('squareText', squareText)
            square.classList.add(`square`);
            square.value = spaceNum++;
            square.addEventListener('click', () => {
                console.log('square.value', square.value)
                gameController(square.value)
                //call function for robot to move if robot is playing
                computerMove();
            })
            square.append(squareText);
            gameContainer.appendChild(square);
        }
    };
    addEventListenerF();


    return {
        gameboard,
        print,
        clear,
        round, 
        startGameChecker,
        addEventListenerF
    };
};

const currentBoard = Gameboard();




function restartGame() {
    gameWon = false;
    currentBoard.round = 2;
    currentBoard.startGameChecker();
    const elem = document.querySelector(".game-box");
    elem.innerHTML = " ";
    currentBoard.clear()
    currentBoard.addEventListenerF();
}

//check if someone won the game
const gameChecker = (board) => {
    let winnerMarker = -1;
    console.log('board', board)
    if ((board[0] === board[1]) && (board[1] === board[2])) {
        winnerMarker = board[0];
    } else if ((board[3] === board[4]) && (board[4] === board[5])) {
        winnerMarker = board[3];
    } else if ((board[6] === board[7]) && (board[7] === board[8])) {
        winnerMarker = board[6];
    } //check if top to bottom are same
    else if ((board[0] === board[3]) && (board[3] === board[6])) {
        winnerMarker = board[0];
    } else if ((board[1] === board[4]) && (board[4] === board[7])) {
        winnerMarker = board[1];
    } else if ((board[2] === board[5]) && (board[5] === board[8])) {
        winnerMarker = board[2];
    } //check diagonals
    else if ((board[0] === board[4]) && (board[4] === board[8])) {
        winnerMarker = board[0];
    }
    else if ((board[2] === board[4]) && (board[4] === board[6])) {
        winnerMarker = board[2];
    }
    if (winnerMarker === " ") return -1;
    return winnerMarker;
}

//display the winner
const displayResult = (marker) => {
    const container = document.querySelector('.result')
    const restart = document.querySelector('.restart')
    let elementText;
    if (marker === -1) {
        elementText =`Tie!`;
    } else {
        elementText = `Winner is ${marker.toUpperCase()}`;
    }
    container.innerText = elementText
    restart.style.visibility = "visible"
    restart.addEventListener('click', ()=> {
        restart.style.visibility = "hidden"
        container.innerText = " ";
        //function to restart the game
        restartGame();
    })
}

function computerMove(){
    if(playerTwo.getName() === "Computer"){
        playerTwo.placeMarker(currentBoard);
        currentBoard.print();
    }
}

const gameController = (value) => {
    //check if game has been started
    console.log(`Current currentBoard.round: ${currentBoard.round}`);
    if (!gameWon) {
        if (currentBoard.round % 2 === 0) {
            //player one goes
            highlightCurrentPlayer();
            playerOne.placeMarker(currentBoard, value);
            currentBoard.print();

        } else if (((currentBoard.round - 1) % 2 === 0)) {
            //player two goes
            highlightCurrentPlayer();
            if(playerTwo.getName() !== "Computer"){
                playerTwo.placeMarker(currentBoard, value);
            } 
            currentBoard.print();
        }
    }
    //check board to see if someone one
    let winnerMarker = gameChecker(currentBoard.gameboard)
    if (winnerMarker !== -1) {
        gameWon = true;
        console.log(`Game Won! by ${winnerMarker}`);
        displayResult(winnerMarker);
    }
    if (currentBoard.round === 10) {
        gameWon = true;
        console.log("There was a tie betweent the players")
        displayResult(winnerMarker);
    }

}
