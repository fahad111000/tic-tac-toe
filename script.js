// Tic Tak Toe

// Buttons
let buttons = document.querySelectorAll('.box');
let winnerMsg = document.getElementById('winnerMsg');
let newgame = document.getElementById('newgame');
let resetGame = document.getElementById('reset');
let matchDraw = document.getElementById('draw');
let playerX = document.getElementById('playerX');
let playerO = document.getElementById('playerO');

// total number of a both players
let count = 0;

// Total wins for playerX and playerO
let playerXWins = 0;
let playerOWins = 0;


// These are winning pattrens(same pattren are winning pattren)
let winningPattren = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]


// player Turn (X, O)
let playerTurn = true;

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (playerTurn) {
            btn.innerText = 'X';
            btn.style.background = 'rgba(116, 0, 0, 0.794)';
            btn.style.color = '#fff';
            playerTurn = false;
        }

        else {
            btn.innerText = 'O';
            btn.style.background = 'rgba(80, 110, 120, 0.774)';
            btn.style.color = '#fff';
            playerTurn = true;
        }

        // when a player press button button will be lock
        btn.disabled = true;
        count++;

        let isWinner = checkPattren();

        if (count === 9 && !isWinner) {
            gameDraw();
        }

    })
})


// Game Draw message
const gameDraw = () => {
    matchDraw.innerText = `Match is Draw`;
    matchDraw.classList.remove('hide')
}

// checking The winnign condition or pattren
const checkPattren = () => {
    for (pattren of winningPattren) {
        let postionOne = buttons[pattren[0]].innerText;
        let postionTwo = buttons[pattren[1]].innerText;
        let postionThree = buttons[pattren[2]].innerText;


        if (postionOne !== '' && postionTwo !== '' && postionThree !== '') {
            if (postionOne === postionTwo && postionTwo === postionThree) {
                showWinner(postionOne);
                totalWins(postionOne);
                return true;
            }
        }

    }

}

const totalWins = (player) => {
    if (player === 'X') {
        playerXWins++;
        playerX.innerText = playerXWins;
    }

    else {
        playerOWins++;
        playerO.innerText = playerOWins;
    }
}

// show winner Message
const showWinner = (winner) => {
    winnerMsg.innerText = `Winner player  ${winner}`;
    winnerMsg.classList.remove('hide');

    // this loop is used for disable buttons
    for (let btn of buttons) {
        btn.disabled = true;
    }
}

// This function is use for restart and new game 
const restart = () => {
    winnerMsg.classList.add('hide');
    matchDraw.classList.add('hide');
    playerTurn = true;
    count = 0;
    for (let btn of buttons) {
        btn.innerText = '';
        btn.disabled = false;
        btn.style.background = '';
    }
}


// Reset Game
const reset = () =>{
    playerXWins = 0;
    playerOWins = 0;
    playerX.innerText = playerXWins;
    playerO.innerText = playerOWins;
    restart();
}



newgame.addEventListener('click', restart);
resetGame.addEventListener('click', reset);















