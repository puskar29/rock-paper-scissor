let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const playAgainPara = document.querySelector("#play-again-btn");
const msg = document.querySelector("#msg");
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Loose! Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "red";
    }

    if(userScore === 5){
        msg.innerText = "You reached 5! You win!";
        msg.style.background = "green";
        // hideScoreMsg();
        showPlayAgainBtn();
    }
    else if(compScore === 5){
        msg.innerText = "Computer reached 5! Computer Wins!";
        msg.style.background = "red";
        // hideScoreMsg();
        showPlayAgainBtn();
    }
}

const drawGame = () =>{
    console.log("Game was draw.");
    msg.innerText = "Game was draw! Play Again";
    msg.style.background = "rgb(5, 5, 134)";
}
const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);

    //Computer Choice
    const compChoice = genCompChoice();
    console.log("Computer Choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach(choices => {
    console.log(choices);
    choices.addEventListener('click', () => {
        const userChoice = choices.getAttribute("id");
        playGame(userChoice);
    })
});

//ShowPlayAgainButton
const showPlayAgainBtn = () =>{
    playAgainPara.style.display = "inline-block";
}

//hide Score Button
// const hideScoreMsg = () => {
//     msg.style.display = "none";
// }

//show score button when click play again
const showScoreMsg = () => {
    msg.style.display = "inline-block";
}

//Reset Button
const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play Your Move!"
    msg.style.background = "rgb(5, 5, 134)";
    playAgainPara.style.display = "none";
    // showScoreMsg();
}

playAgainPara.addEventListener('click', resetGame);