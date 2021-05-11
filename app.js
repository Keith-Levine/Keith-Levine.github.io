// decalre my variables
const startButton = document.querySelector('#button1');

const computerTurnIndicator = document.querySelector('.computer');
const playerTurnIndicator = document.querySelector('.player');

const yellowButton = document.querySelector('.yellow-square');
const redButton = document.querySelector('.red-square');
const blueButton = document.querySelector('.blue-square');
const greenButton = document.querySelector('.green-square');
// const gameButtons = ['yellow-square', 'red-square', 'blue-square', 'green-square']
const squares = [document.getElementById('red'),
                document.getElementById('blue'),
                document.getElementById('green'),
                document.getElementById('yellow')]

// create computer turn array
// create a human turn array

let computerTurn = [];
let playerTurn = [];
let level = 0;

// randomizing the button selection
function randomButtonPicker() {
    const gameButtons = ['red', 'green', 'blue', 'yellow'];
    const randomColor = gameButtons[Math.floor(Math.random() * gameButtons.length)];
    // console.log(randomColor);
    return randomColor
};

// activating the buttons for the user to see
function activateButton(color) {
    const button = document.getElementById(`${color}`);

    button.classList.add('activated');

    setTimeout(() => {
        button.classList.remove('activated');
      }, 500);
};

// iterating over the computerTurn array
function showRound(nextComputerTurn) {
    nextComputerTurn.forEach((color, index) => {
        // adding delay so buttons are pressed sequentially
        setTimeout(() => {
          activateButton(color);
        }, (index + 1) * 500);
      });
};

// adding a level, and an additional button push
function nextLevel() {
    level += 1;
    const nextComputerTurn = [...computerTurn];
    nextComputerTurn.push(randomButtonPicker());
    showRound(nextComputerTurn);
};

// beginning the game
function startGame() {
    nextLevel();
};
// event listener to begin game with start button
startButton.addEventListener('click', startGame);

// nextLevel()
// console.log(computerTurn)