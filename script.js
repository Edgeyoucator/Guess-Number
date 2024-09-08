'use strict';

// document.querySelector('.message').textContent = "🎉 Correct Answer!"

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random()* 20) + 1;
let score = 20;
let highScore = 0; 


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = "⛔ Please type a number!";
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 
        "🎉 Well done! You guessed the number!";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "#60b347"
        document.querySelector('.number').style.width = "25rem"

        if (score>highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        
    } else if (guess > secretNumber) {
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = "☝️ Too high, try again";
        } else {
            document.querySelector('.message').textContent = "💥 GAME OVER!"
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = "👇 Too low, try again";

        } else {
            document.querySelector('.message').textContent = "💥 GAME OVER!"
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').textContent = "?"; 
    document.querySelector('.number').style.width = "15rem";
    secretNumber = Math.trunc(Math.random()* 20) + 1;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.guess').value = "";
})

