// decalre my variables
const startButton = document.querySelector('#button1');

const computerTurnIndicator = document.querySelector('.computer');
const playerTurnIndicator = document.querySelector('.player');

const yellowButton = document.querySelector('.yellow-square');
const redButton = document.querySelector('.red-square');
const blueButton = document.querySelector('.blue-square');
const greenButton = document.querySelector('.green-square');
// const gameButtons = ['yellow-square', 'red-square', 'blue-square', 'green-square']

// create computer turn array
// create a human turn array

let computerTurn = [];
let playerTurn = [];
let level = 0;

function randomButtonPicker() {
    const gameButtons = [
        document.querySelector('.yellow-square'), 
        document.querySelector('.red-square'), 
        document.querySelector('.blue-square'), 
        document.querySelector('.green-square')
    ];
    const randomColor = gameButtons[Math.floor(Math.random() * gameButtons.length)];
    console.log(randomColor);
}

function nextLevel() {
    level += 1;
    const nextComputerTurn = [...computerTurn];
    nextComputerTurn.push(randomButtonPicker());
}

function startGame() {
    nextLevel()
};

startButton.addEventListener('click', startGame);

// nextLevel()
// console.log(computerTurn)