'use strict';

// Selecting elements by selectors and element ID
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0')
const current2El = document.getElementById('current--1')


const dice = document.querySelector('.dice');
const btnNewGame = document.getElementById("newGame");
const btnHold = document.getElementById("holdScore");
const btnRoll = document.getElementById("rollDice");

let activePlayer = 0;
let currentScore = 0;
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
let scores = [0, 0]

const hideButtons = function(){
    dice.classList.add('hidden');
    btnHold.classList.add('hidden');
    btnRoll.classList.add('hidden');
    document.querySelector('.paragraph').classList.add('hidden')
}
const showButtons = function(){
    dice.classList.remove('hidden');
        btnHold.classList.remove('hidden');
        btnRoll.classList.remove('hidden');
        document.querySelector('.paragraph').classList.remove('hidden')
}

const switchingPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function(){
    // Generating random dice roll
    const rollNum = Math.trunc(Math.random()*6)+1;

    // Display dice according to the number
    dice.classList.remove('hidden');
    dice.src = `dice-${rollNum}.png`;

    // check for rolled '1': if true, switch to the next player and score = 0
    if(rollNum !== 1){
        currentScore += rollNum;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else{
        switchingPlayer();
    }
})

btnHold.addEventListener('click', function(){
    // add current score to the score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //check if score >=100 
    if (scores[activePlayer] >= 20){
        console.log('true')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        hideButtons();
    }
    else{
        //switch to the next player
        switchingPlayer();
    }

})

btnNewGame.addEventListener('click', function(){
    scores = [0, 0];
    console.log(scores)
    currentScore = 0;
    current0El.textContent = 0;
    current2El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active')
    document.query
    activePlayer = 0;
    player0El.classList.add('player--active');
    showButtons();
    dice.classList.add('hidden')
    score0.textContent = 0;
    score1.textContent = 0;
    
})
