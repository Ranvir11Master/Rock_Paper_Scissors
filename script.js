let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#you");
const compScorePara = document.querySelector("#comp");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randInx = Math.floor(Math.random() * 3);

  return option[randInx];
}

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Orange";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Loss! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const drawGame = () => {
    msg.innerText = "Game was Draw!. Play again"
    msg.style.backgroundColor = "#081b31";
};

const playGame = (userChoice) => {
    console.log(`User Choice is Equal to "${userChoice}"`);
    //Gererate Computer Choice 
    const compChoice = genCompChoice();
    console.log(`Computer Choice is Equal to "${compChoice}"`);

    if (userChoice === compChoice) {
      //Draw Game
      drawGame();
    } else {
      let userWinn = true;
      if (userChoice === "rock") {
        //paper, scissor
        userWinn = compChoice === "paper" ? false: true;

      } else if (userChoice === "paper") {
        //rock, scissors
        userWinn = compChoice === "rock" ? true: false;

      } else {
        //rock, paper
        userWinn = compChoice === "rock" ? false: true; 
      }

      showWinner(userWinn, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
     choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
     })
})