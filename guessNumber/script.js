'use strict';


const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};



let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//start guessing
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //if there is no number
  if (!guess) {
    displayMessage('⛔️No Number....!!!'); ///
  } else if (guess === secretNumber) {
    //if correct guess
    displayMessage('🥳Correct Number'); ///
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // update high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    // when guess is wrong

    if (score > 1) {
      //if guess is higher
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈Too High!' : '📉Too Low';
      displayMessage(guess > secretNumber ? '📈Too High!' : '📉Too Low');
      score--;
    } else {
      displayMessage('😕You Lost the Game...!!!'); ///
    }
    document.querySelector('.score').textContent = score;
  }
});

// for again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...'); ///
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.guess').value = '';
});
