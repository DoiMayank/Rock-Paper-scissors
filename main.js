// console.log("Hi");

// const options = ["rock","paper","scissor"];

// function getComputerChoice() {
//     const choice = options[Math.floor(Math.random ()* options.length)];
//     console.log(choice);
//     return choice;
    
// }

// function checkWinner(playerSelection,computerSelection){
//     if (playerSelection === computerSelection)
//         {return "Tie";}
//     else if (
//            (playerSelection === "rock" && computerSelection === "scissor") ||
//            (playerSelection === "paper" && computerSelection === "rock") ||
//            (playerSelection === "scissor" && computerSelection === "paper")
//     ) {return "Player";}
//     else {
//         return "Computer";
//     }

    
// }


// function playRound(playerSelection,computerSelection){
//     const result = checkWinner(playerSelection,computerSelection);
//     if (result === "Tie"){
//         return "It's a Tie";
//     }
//     else if (result === "Player"){
//         return `You won ${playerSelection} beats ${computerSelection} `;
//     }
//     else {
//         return `Computer won ${computerSelection} beats ${playerSelection} `;
//     }
// }

// function getPlayerChoice(){
//     let validateInput = false;
//     while(validateInput == false){
//         const choice = prompt("Rock Paper Scissor");
//         if (choice == null){
//             continue;
//         }
//         const choiceInLower = choice.toLowerCase();
//         if (options.includes(choiceInLower)){
//             validateInput = true;
//             return choiceInLower;
//         }
//     }

// }

// function game(){
//     let scorePlayer = 0;
//     let scoreComputer = 0;
//     console.log("Welcome")
//     for(i = 0; i<5; i++){
//         const playerSelection  = getPlayerChoice();
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection,computerSelection));
//         // console.log("----------------------------------------");
//         if(checkWinner(playerSelection,computerSelection)== "Player"){
//             scorePlayer++;
//         }else if(
//         checkWinner(playerSelection,computerSelection)=="Computer"){
//             scoreComputer++;
//         }


//     }
//     console.log("Game Over")
//     if(scorePlayer > scoreComputer){
//         console.log ("Player was the overall winner");
//     }else if(scorePlayer < scoreComputer){
//         console.log("Computer is overall winner");
//     }else{
//         console.log("It is a Tie");
//     }
// }

// game()

console.log("Hi");

const options = ["rock", "paper", "scissor"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice); // Moved before return to ensure it's executed
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result === "Tie") {
        return "It's a Tie";
    } else if (result === "Player") {
        return `You won ${playerSelection} beats ${computerSelection}`;
    } else {
        return `Computer won ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice() {
    let validateInput = false;
    while (!validateInput) {
        const choice = prompt("Rock, Paper, Scissor").toLowerCase();
        if (choice == null) {
            continue;
        }
        if (options.includes(choice)) {
            validateInput = true;
            return choice;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome");
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        const winner = checkWinner(playerSelection, computerSelection);
        if (winner == "Player") {
            scorePlayer++;
        } else if (winner == "Computer") {
            scoreComputer++;
        }
    }
    console.log("Game Over");
    if (scorePlayer > scoreComputer) {
        console.log("Player was the overall winner");
    } else if (scorePlayer < scoreComputer) {
        console.log("Computer is the overall winner");
    } else {
        console.log("It is an overallrock Tie");
    }
}

game();
