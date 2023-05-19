// Rock, Paper & Scissor

let resultDiv = document.querySelector('#result-text')
let playerScoreDiv = document.querySelector('#player-score')
let handsDiv = document.querySelector('#hands')

const totalScore = {playerScore: 0, computerScore: 0}

const getComputerChoice = () => {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
  const ran = Math.floor(Math.random() * rpsChoice.length)
  
  return rpsChoice[ran]
}

const getResult = (playerChoice, computerChoice) => {
  let score;

  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1;
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock'){
    score = 1;
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}

const showResult = (score, playerChoice, computerChoice) => {


  if (score == -1) {
    resultDiv.textContent = 'You Lose 😢'
  } else if (score == 1) {
    resultDiv.textContent = 'You Win 🤩'
  } else {
    resultDiv.textContent = 'Draw 😞'
  }

  handsDiv.innerText = `👦${playerChoice} vs 🤖 ${computerChoice}`
  playerScoreDiv.textContent = `Your Score: ${totalScore.playerScore}`
}

const onclickRps = (playerChoice) => {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)

  totalScore['playerScore'] += score

  showResult(score, playerChoice, computerChoice)
}

const playGame = () => {
  const rpsButton = document.querySelectorAll('.rpsButton')

  rpsButton.forEach(rpsButtons => {
    rpsButtons.addEventListener('click', () => onclickRps(rpsButtons.value))
  })

  document.querySelector('#endGameButton').addEventListener('click', () => endGame())

}

const endGame = () => {
  totalScore['playerScore'] = 0;
  totalScore['computerScore'] = 0;

    resultDiv.textContent = ''
    playerScoreDiv.textContent = ''
    handsDiv.textContent = ''

}

playGame()
