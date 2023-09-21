const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorButton = document.querySelector("#scissorButton");

let playerText = document.querySelector("#playerText");
let computerText = document.querySelector("#computerText");
let resultText = document.querySelector("#resultText");


let arrayMoves = ["Rock", "Paper", "Scissor"];
let computerMove = "";
let userMove = "";

function whoWin(uM, cM){
    if(uM === cM){
        return "Match Darw!";
    }
    else if(uM === "Rock"){
        if(cM === "Paper"){
            return "Computer Wins!";
        }
        else{
            return "Player Wins!";
        }
    }
    else if(uM === "Paper"){
        if(cM === "Scissor"){
            return "Computer Wins!";
        }
        else{
            return "Player Wins!";
        }
    }
    else if(uM === "Scissor"){
        if(cM === "Rock"){
            return "Computer Wins!";
        }
        else{
            return "Player Wins!";
        }
    }
}

rockButton.addEventListener("click", ()=>{
    userMove = "Rock";
    computerMove = arrayMoves[Math.floor(Math.random() * 3)];
    playerText.textContent = "Player:" + userMove;
    computerText.textContent = "Computer:" + computerMove;
    resultText.textContent = "Result:" + whoWin(userMove, computerMove);
});
paperButton.addEventListener("click", ()=>{
    userMove = "Paper";
    computerMove = arrayMoves[Math.floor(Math.random() * 3)];
    playerText.textContent = "Player:" + userMove;
    computerText.textContent = "Computer:" + computerMove;
    resultText.textContent = "Result:" + whoWin(userMove, computerMove);
});
scissorButton.addEventListener("click", ()=>{
    userMove = "Scissor";
    computerMove = arrayMoves[Math.floor(Math.random() * 3)];
    playerText.textContent = "Player:" + userMove;
    computerText.textContent = "Computer:" + computerMove;
    resultText.textContent = "Result:" + whoWin(userMove, computerMove);
});