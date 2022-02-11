let userScore = 0;
let computerScore = 0;
//console.log(userPick);

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function toWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function game() {
    let userChoice = prompt ('Rock, paper or scissors?')
    const userPick = userChoice.toLowerCase().charAt(0)
    const computerChoice = getComputerChoice()
    console.log(computerChoice);
    console.log(userPick);
    if (userPick === computerChoice) {
        alert (`It's a draw.\nPlayer: ${toWord(userPick)}\nComputer: ${toWord(computerChoice)}\nPlayer score:${userScore}\nComputer score:${computerScore}`)
    } else if (userPick === "r" && computerChoice === "s" || userPick === "s" && computerChoice === "p" || userPick === "p" && computerChoice === "r") {
        userScore++;
        alert (`Player wins!\nPlayer: ${toWord(userPick)}\nComputer: ${toWord(computerChoice)}\nPlayer score:${userScore}\nComputer score:${computerScore}`)
    } else {
        computerScore++;
        alert (`Computer wins!\nPlayer: ${toWord(userPick)}\nComputer: ${toWord(computerChoice)}\nPlayer score:${userScore}\nComputer score:${computerScore}`)
    }
}
console.log(userScore);
console.log(computerScore);

for (let i = 0; i < 5; i++){
    game()
}

checkWin();

function checkWin() {
    if (computerScore > userScore)
        alert("User Lose!!!")
    else if (userScore > computerScore)
        alert("User Wins!!!")
    else
        alert("It's a draw")
}

console.log(userScore);
console.log(computerScore);
//console.log(userChoice);
