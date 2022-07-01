let choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;
let choice;
let counter = 0;

let computerChoice = () => {
    //choose a random variable from 0-2 
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}


let humanChoice = (userChoice) => {
    console.log(`Choice chosen is ${userChoice}`);
    if(counter < 5){
        choice = userChoice;
        playGame(choice, computerChoice());
    }
    
}



let checkChoices = (choiceOne1, choiceTwo2) => {
    let choiceOne = choiceOne1.toLowerCase();
    let choiceTwo = choiceTwo2.toLowerCase();
    console.log('Computer chose', choiceTwo);
    console.log('Human chose', choiceOne)

    if(choiceOne == choiceTwo){
        // computerScore++;
        // humanScore++;
        return "Tie"
    } else if(choiceOne == "rock" && choiceTwo == "paper"){
        computerScore++;
        return "Computer won"
    } else if (choiceOne == "rock" && choiceTwo == "scissors"){
        humanScore++;
        return "Human won"
    } else if (choiceOne == "paper" && choiceTwo == "scissors") {
        computerScore++;
        return "Computer won"
    } else if (choiceOne == "paper" && choiceTwo == "rock") {
        humanScore++;
        return "Human won"
    } else if (choiceOne == "scissors" && choiceTwo == "rock") {
        computerScore++;
        return "Computer won"
    } else if (choiceOne == "scissors" && choiceTwo == "paper") {
        humanScore++;
        return "Human won"
    }
}


let playGame = (userChoice, computerChoice) => {
    //make both case sensitive
    userChoice.toLowerCase();
    computerChoice.toLowerCase();
    console.log(checkChoices(userChoice, computerChoice));
    counter++;
    document.getElementById("playerScore").textContent = humanScore;
    document.getElementById("computerScore").textContent = computerScore;
    console.log(`Current score: Human:${humanScore}, Computer:${computerScore}`);
    document.getElementById("round").textContent = counter;
    if(counter === 5){
        if (humanScore > computerScore) {
            document.getElementById("winner").textContent = "Congrats Human Won!";
        } else if (humanScore == 0 && computerScore == 0) {
            console.log("Game was cancelled. Refresh page to play again")
        } else if (humanScore == computerScore) {
            document.getElementById("winner").textContent = "Tie!!!";
        } else {
            document.getElementById("winner").textContent = 'Computer Won! boo hoo!';
        }
    }
}


let game = () => {
    let i = 0;
    while(i < 3){
        playGame(humanChoice(), computerChoice());
        console.log(`Current score: Human:${humanScore}, Computer:${computerScore}`);
        i++;
    }
    
}




