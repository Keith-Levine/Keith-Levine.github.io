// declare my variables
const startButton = document.querySelector('#startButton');
const allButtons = document.querySelector('.game-buttons');
const info = document.querySelector('.instructions');
const timeIntervalOfOneMove = 500

// create computer turn array
let computerMoves = [];
// create a human turn array
let playerMoves = [];
//create levels
let level = 0;


// function to restart the game
function restartGame(text) {
    alert(text);
    startButton.classList.remove('hidden');
    info.classList.add('hidden'); 
    computerMoves = [];
    playerMoves = [];
    level = 0;
};

// signaling the player's turn to click
function playerSignal() {
    info.textContent = `Level ${level}: ${level} click(s)`;
}

// adding to player's array
function addColors(evt) {
    playerMoves.push(evt.target.id);
    compare();
};

// record users clicks
function compare() {
        const index = playerMoves.push() - 1;
        if (playerMoves[index] !== computerMoves[index]) {
            restartGame('GAME OVER!!');
            return;
        }
        else if (playerMoves.length === computerMoves.length) {
            if (playerMoves.length === 3) {
                restartGame('You Win!');
            }
            else {setTimeout(() => {
                nextLevel();
            }, 1000);
            return;
        };
    };
};

// activating the buttons for the user to see
function activateButton(color) {
    const button = document.getElementById(`${color}`);
// play sound
    button.classList.add('activated');

    setTimeout(() => {
        button.classList.remove('activated');
      }, timeIntervalOfOneMove);
};

// iterating over the computerMoves array
function showRound(nextComputerMoves) {
    nextComputerMoves.forEach((color, index) => {
        // adding delay so buttons are pressed sequentially
        setTimeout(() => {
          activateButton(color);
        }, (index + 1) * timeIntervalOfOneMove);
    });
    const numberOfMoves = nextComputerMoves.length + 1
    setTimeout(() => {
        playerSignal();
    }, (numberOfMoves * timeIntervalOfOneMove));
};

// computerMoves Logic
// randomizing the button selection
function randomButtonPicker() {
    const gameButtons = ['red', 'green', 'blue', 'yellow'];
    const randomColor = gameButtons[Math.floor(Math.random() * gameButtons.length)];
    return randomColor;
};

// adding a level, and an additional button push
function nextLevel() {
    level += 1;

    info.classList.remove('hidden');
    info.textContent = 'Watch';

    playerMoves = [];
    const nextComputerMoves = [...computerMoves];
    nextComputerMoves.push(randomButtonPicker());
    showRound(nextComputerMoves);

    computerMoves = [...nextComputerMoves];
};

// beginning the game
function startGame() {
    startButton.classList.add('hidden');
    nextLevel();
};

// event listener to begin game with start button
startButton.addEventListener('click', startGame);

// adding event listeners for squares
allButtons.addEventListener('click', evt => {
    addColors(evt);
});
