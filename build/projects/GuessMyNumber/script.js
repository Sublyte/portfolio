'use strict';

//Secret Number
const genterateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
//want results to be 1 to 100 so (1, 101) is nessessary
let secretNumber = genterateRandomNumber(1, 101);

//Score

let score = 100;
let highScore = 0;
document.querySelector(`.score`).textContent = score;
document.querySelector(`.highscore`).textContent = highScore;

//Try again phrases
let tryAgain;
let phrase;
const anotherTry = [
  `Whooops. Try again.`,
  `Give it another shot.`,
  `Give it another go.`,
  `If at first you don't succeed.`,
  `Sometimes the right path is not the easiest one.`,
  `Never give up, Never surrender!`,
  `You’ve got this. Most of the time, the challenges you face are those you were already built to handle.`,
  `Nobody’s perfect.`,
  `Hope is not a strategy.`,
  `I must break you...`,
  `Help me.. Help you..`,
  `You can do it!`,
  `If you're not failing every now and again, it's a sign you're not doing anything very innovative.`,
  `You could not live with your own failure, and where did that bring you? Back to me.`,
  `The greatest teacher, failure is.`,
];
phrase = genterateRandomNumber(0, anotherTry.length - 1);

//Check Button
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  //No Guess
  if (!guess) {
    document.querySelector(
      `.message`
    ).textContent = `Derp. You need to make a guess.`;
    //Correct
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `Correct!`;
    document.querySelector(`.top`).textContent = `Congratulations!`;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).textContent = secretNumber;
    if (highScore > score) {
      highScore = highScore;
      document.querySelector(`.highscore`).textContent = highScore;
    }
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    //Incorrect
  } else {
    if (score > 1) {
      if (guess > secretNumber) {
        document.querySelector(`.top`).textContent = `Too High!`;
        phrase = genterateRandomNumber(0, anotherTry.length - 1);
        document.querySelector(
          `.message`
        ).textContent = `${anotherTry[phrase]}`;
        score--;
        document.querySelector(`.score`).textContent = score;
      } else if (guess < secretNumber) {
        document.querySelector(`.top`).textContent = `Too Low!`;
        phrase = genterateRandomNumber(0, anotherTry.length - 1);
        document.querySelector(
          `.message`
        ).textContent = `${anotherTry[phrase]}`;
        score--;
        document.querySelector(`.score`).textContent = score;
      }
      //Game Over
    } else {
      document.querySelector(`.top`).textContent = `You lost the game!`;
      document.querySelector(
        `.message`
      ).textContent = `Honestly that's pretty hard to do, so... Well done?`;
      score = 0;
      document.querySelector(`.score`).textContent = score;
      document.querySelector(`body`).style.backgroundColor = `#B90E0A`;
    }
  }
});
console.log(secretNumber);
console.log(anotherTry[phrase]);

//Again Button
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 100;
  highScore = highScore;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.highscore`).textContent = highScore;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(
    `.top`
  ).textContent = `You won't guess it this time...`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  secretNumber = genterateRandomNumber(1, 101);
});
