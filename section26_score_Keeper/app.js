const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playto')

// to keep tracking of player1 score 
let p1Score = 0;
let p2Score = 0;
// We need to set the winning score 
let winningScore = 3;
// in order to stop the scoring when one player reaches the maxi. score, we neeed to end the game using a boolean logic 
let isGameOver = false;

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore)
            isGameOver = true;
            p1Display.classList.add('winner'); // this will label the player 1 with green if wins 
            p2Display.classList.add('loser');
    }
    p1Display.textContent = p1Score; // this will update the p1Score to whatever the value is 
})

// for player2 score 
p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore)
            isGameOver = true;
            p2Display.classList.add('winner'); // this will label the player 1 with green if wins 
            p1Display.classList.add('loser');
    }
    p2Display.textContent = p2Score; // this will update the p1Score to whatever the value is 
})

// This snippet is for setting the final score of the game in the select options 
winningScoreSelect.addEventListener('change', () => {
    winningScore = parseInt(this.value); // this is to make sure we get an integer not a string 
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false; 
    p1Score = 0; 
    p2Score = 0; 
    p1Display.textContent = 0;
    p2Display.textContent = 0; 
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}