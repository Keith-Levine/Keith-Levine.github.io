// declare my variables
const startButton = document.querySelector('#button1');
const allButtons = document.querySelector('.game-buttons');
const info = document.querySelector('.instructions');

// create computer turn array
let computerTurn = [];
// create a human turn array
let playerTurn = [];
//create levels
let level = 0;


// function to restart the game
function restartGame(text) {
    alert(text);
    startButton.classList.remove('hidden');
    info.classList.add('hidden'); 
    computerTurn = [];
    playerTurn = [];
    level = 0;
};

// signaling the player's turn to click
function playerSignal() {
    info.textContent = `Level ${level}: ${level} click(s)`;
}

// adding to player's array
function addColors(evt) {
    playerTurn.push(evt.target.id);
    compare();
};

// record users clicks
function compare() {
        const index = playerTurn.push() - 1;
        if (playerTurn[index] !== computerTurn[index]) {
            restartGame('GAME OVER!!');
            return;
        }
        else if (playerTurn.length === computerTurn.length) {
            if (playerTurn.length === 3) {
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

    button.classList.add('activated');

    setTimeout(() => {
        button.classList.remove('activated');
      }, 500);
    setTimeout(() => {
        playerSignal();
      }, 1500);
    
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

// computerTurn Logic
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

    playerTurn = [];
    const nextComputerTurn = [...computerTurn];
    nextComputerTurn.push(randomButtonPicker());
    showRound(nextComputerTurn);

    computerTurn = [...nextComputerTurn];
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
