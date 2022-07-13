const userChoice = $('#user-choice')
const compChoice = $('#computer-choice')
const resultDisplay = $('#result')
let computerSelected
let userSelected

const choices = document.querySelectorAll('button')
choices.forEach((choice) =>
  choice.addEventListener('click', (e) => {
    userSelected = e.target.id
    userChoice.html(userSelected)
    getCompChoice()
    getResult()
  })
)

function getCompChoice() {
  const randNum = Math.floor(Math.random() * choices.length)

  switch (randNum) {
    case 0:
      computerSelected = 'rock'
      break
    case 1:
      computerSelected = 'paper'
      break
    case 2:
      computerSelected = 'scissors'
      break
  }
  compChoice.html(computerSelected)
}

function getResult() {
  let result = 'You Lose!'
  if (computerSelected === userSelected) {
    result = 'Draw!'
  } else if (
    (computerSelected === 'rock' && userSelected === 'paper') ||
    (computerSelected === 'paper' && userSelected === 'scissors') ||
    (computerSelected === 'scissors' && userSelected === 'rock')
  ) {
    result = 'You Win!'
  }
  resultDisplay.html(result)
}
