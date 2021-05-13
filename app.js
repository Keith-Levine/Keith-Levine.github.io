// decalre my variables
const startButton = document.querySelector('#button1');

const computerTurnIndicator = document.querySelector('.computer');
const playerTurnIndicator = document.querySelector('.player');

const yellowButton = document.querySelector('.yellow-square');
const redButton = document.querySelector('.red-square');
const blueButton = document.querySelector('.blue-square');
const greenButton = document.querySelector('.green-square');
// const gameButtons = ['yellow-square', 'red-square', 'blue-square', 'green-square']
const allButtons = document.querySelector('.game-buttons')
// create computer turn array
// create a human turn array

let computerTurn = [];
let playerTurn = [];
let level = 0;
// let rounds = 0;

// function to restart the game
function restartGame(text) {
    alert(text);
    computerTurn = [];
    playerTurn = [];
    level = 0;
};

// adding to player's array
function addColors(evt) {
    // console.log(evt)
    playerTurn.push(evt.target.id)
    console.log(playerTurn)
    compare()
}

// record users clicks
function compare() {
    // if (playerTurn.length === computerTurn.length) {
        const index = playerTurn.push() - 1;
        console.log(index)
        if (playerTurn[index] !== computerTurn[index]) {
            restartGame('GAME OVER!!');
            return;
        }
        else if (playerTurn.length === computerTurn.length) {
            if (playerTurn.length === 3) {
                restartGame('You Win!')
            }
            else {setTimeout(() => {
              nextLevel();
            }, 1000);
            return;
        }
    }
        // if (playerTurn === 3) {
        //                 restartGame('You Win!')
        //             }
        // } 
    // for (i = 0; i < computerTurn.length; i++) {

    // }
    // const index = playerTurn.push() - 1;
    // console.log(index)
    // if (playerTurn[index] !== computerTurn[index]) {
    //     restartGame('GAME OVER!!');
    //     return;
    //   }

    // if (playerTurn === computerTurn) {
    //         if (playerTurn === 3) {
    //             restartGame('You Win!')
    //         }

        // playerTurn = [];
        // setTimeout(() => {
        //   nextLevel();
        // }, 1000);
        // return;
    //   }
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

// computerTurn Logic
// randomizing the button selection
function randomButtonPicker() {
    const gameButtons = ['red', 'green', 'blue', 'yellow'];
    const randomColor = gameButtons[Math.floor(Math.random() * gameButtons.length)];
    // console.log(randomColor);
    // console.log(randomColor)
    // console.log(computerTurn)
    return randomColor;
};

// adding a level, and an additional button push
function nextLevel() {
    level += 1;

    playerTurn = []
    const nextComputerTurn = [...computerTurn];
    nextComputerTurn.push(randomButtonPicker());
    console.log(nextComputerTurn)
    // nextComputerTurn.push(randomColor);
    showRound(nextComputerTurn);

    computerTurn = [...nextComputerTurn]
    // show computer turn and wait for player input
    // setTimeout(() => {
    //     playersTurn();
    //   }, level * 600 + 1000);
};

// function compareTurns() {
//     if (computerTurn === playerTurn) {


//         nextLevel()
//     }
// }


// function recordClick(button) {
//     const index = playerTurn.push(button) - 1;

//     if (playerTurn[index] !== computerTurn[index]) {
//         restartGame();
//         return;
//       }

//     if (playerTurn.length === computerTurn.length) {
//         playerTurn = [];
//         setTimeout(() => {
//           nextLevel();
//         }, 1000);
//         return;
//       }
// };



// beginning the game
function startGame() {
    nextLevel();
};
// event listener to begin game with start button
startButton.addEventListener('click', startGame);

// adding event listeners for squares
allButtons.addEventListener('click', evt => {
    // let { button } = evt.currentTarget.id;
    // console.log(evt)
    addColors(evt);
});

// console.log(allButtons)