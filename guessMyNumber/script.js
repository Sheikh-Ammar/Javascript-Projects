// USE JS STRICT
'use strict';

// SET SECRET RANDOM NUMBER AND INITAL SCORE, HIGH SCORE
let secretNumber = Math.trunc(Math.random() * 20 + 1);
var initalScore = 20;
var highScore = 0;

// DISPLAY MESSAGES
const showMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// WHEN ON CHECK BUTTON CLICK THEN
document.querySelector('.check').addEventListener('click', function () {
  // STORE SCORE AND GUESS INPUT NO. VALUES
  const score = document.querySelector('.score');
  let guess = Number(document.querySelector('.guess').value);

  //   WHEN GUESS NO NO. IN INPUT
  if (!guess) {
    showMessage('No Number !');
  } else if (guess === secretNumber) {
    showMessage('Correct Number !');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (initalScore > highScore) {
      highScore = initalScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // WHEN GUESS NO. NOT EQULA SECRET NO.
  else if (guess !== secretNumber) {
    if (initalScore > 1) {
      showMessage(
        guess > secretNumber ? 'Too High Number !' : 'Too Low Number !'
      );
      initalScore--;
      score.textContent = initalScore;
    } else {
      showMessage('You Lose Game!');
      score.textContent = 0;
    }
  }
  document.querySelector('.guess').value = '';
});

// WHEN PLAY ADAIN BUTTON CLICK THEN
document.querySelector('.again').addEventListener('click', function () {
  // SCORE WILL 200 AND NEW SECRET NO. GENERATE
  initalScore = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1); //   SHOW MESSAGE
  showMessage('Start Guessing.......');
  //   SET INITIAL SCORE AND INSTEAD OF NO. IN SECRET NO. BOX SHOW  ?
  document.querySelector('.score').textContent = initalScore;
  document.querySelector('.number').textContent = '?';
  //   BODY SETTING REVERSE
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '30rem';
  //   GUESSS INPUT VALUE NULL
  document.querySelector('.guess').value = '';
});
