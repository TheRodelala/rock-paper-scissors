let userScore = 0;
let computerScore = 0;
let computerScore_div = document.querySelector(".computerScore");
let userScore_div = document.querySelector(".userScore");
let result_div = document.querySelector(".result");
const rock_button = document.querySelector(".rock");
const paper_button = document.querySelector(".paper");
const scissors_button = document.querySelector(".scissors")
const restart = document.querySelector(".restart")


rock_button.addEventListener('click', function(){
    game("r");
})

paper_button.addEventListener('click', function(){
    game("p");
})

scissors_button.addEventListener('click', function(){
    game("s");
})


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

function game(userPick) {
    const computerChoice = getComputerChoice()
    if (userPick === computerChoice) {
        result_div.innerHTML = "Draw!"
    } else if (userPick === "r" && computerChoice === "s" || userPick === "s" && computerChoice === "p" || userPick === "p" && computerChoice === "r") {
        userScore++;
        userScore_div.innerHTML = userScore;
        if (userScore <= 4) {
            result_div.innerHTML = `You Win! ${toWord(userPick)} beats ${toWord(computerChoice)}!`
        } else {
            result_div.innerHTML = "You won the game. Congratz"
            const restartButton = document.createElement("button")
            restartButton.textContent = "Restart"
            restart.appendChild(restartButton);
            restartButton.addEventListener('click', function(){
                window.location.reload();
            })
        }
    } else {
        computerScore++;
        computerScore_div.innerHTML = computerScore;
        if (computerScore <= 4){
            result_div.innerHTML = `You Lose! ${toWord(computerChoice)} beats ${toWord(userPick)}!`
        } else {
            result_div.innerHTML = "You lost. Try again."
            const restartButton = document.createElement("button")
            restartButton.textContent = "Restart"
            restart.appendChild(restartButton);
            restartButton.addEventListener('click', function(){
                window.location.reload();
            })
        }
}}

/* console.log(userScore);
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
console.log(userChoice); */
