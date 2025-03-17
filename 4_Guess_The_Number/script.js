let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#guessItem')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const LorH = document.querySelector('.LowOrHigh')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuesses = []

let numGuesses = 1

let playGame = true

if(playGame) {
    submit.addEventListener('click',function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert('Please enter a valid number!!!')
    }
    else if(guess < 1){
        alert('Please enter a number more than 1')
    }
    else if(guess > 100){
        alert('Please enter a number less than 100')
    }
    else {
        prevGuesses.push(guess)
        displayGuess(guess)
        if(numGuesses === 11) {
            // displayGuess(guess)
            displayMessage(`Game Over! The Number was ${randomNumber}`)
            endGame()
        }
        else
        {
            // displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right ${guess}`)
        endGame()
    }
    else if (guess < randomNumber) {
        displayMessage('Number is TOOO low')
    }
    else {
        displayMessage('Number is TOOO high')
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`
}

function displayMessage(messsge) {
    LorH.innerHTML = `<h2>${messsge}</h2>`
}

function endGame () {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id="newGame"><h2>New Game</h2></button>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame () {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuesses = []
        numGuesses = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = 10
        userInput.removeAttribute('disabled')
        userInput.removeChild(p)
        playGame = true
    })
}

