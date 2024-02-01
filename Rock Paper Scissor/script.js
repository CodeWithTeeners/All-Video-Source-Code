const message = document.querySelector(".message")
const playerScoreElement =document.getElementById("player-score")
const computerScoreElement = document.getElementById("computer-score")
const buttons = document.querySelectorAll(".gameFeatures")
let playerScore = 0
let computerScore= 0

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click",playgame)
}

function playgame(e) {
  const playerSelection = e.currentTarget.dataset.choise
  const computerSelection = getComputerChoise()

  const result = checkWinner(playerSelection,computerSelection)

  updateScores(result)
  displayResult(playerSelection,computerSelection,result)
}

function getComputerChoise() {
  const choises = ["Rock","Paper","Scissors"]
  const randomIndex = Math.floor(Math.random()*choises.length)
  return choises[randomIndex]
  
}

function checkWinner(player,computer){
  if(player === computer){
    return "Draw"
  }
  if(
    (player === "Rock" && computer === "Scissors") ||
    (player === "paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper") 
  ){
    return "Player"
  }else{
    return "Computer"
  }
}

function updateScores(result){
  if(result === "Player"){
    playerScore++
  }else if(result === "Computer"){
    computerScore++
  }

  playerScoreElement.textContent = playerScore
  computerScoreElement.textContent = computerScore
}

function displayResult(player,computer,result){
  message.innerHTML = `Player: <strong>${player}<strong/> | Computer: <strong>${computer}</strong><br>${result} wins!`
}

function closePopup(){
  document.getElementById("messagePopup").style.display = "none"
}