// @flow
import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const correctAnswer = number => (number % 2 === 0 ? 'yes' : 'no');

const gameStep = () => {
  const number = getRandomNumber(0, 100);

  console.log(`Question: ${number}`);

  const answer = readlineSync.question('Your answer: ');
  const correct = correctAnswer(number);

  if (answer === correct) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);

  return false;
};

const game = () => {
  console.log('Answer "yes" if number odd otherwise answer "no".');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let step = 0;

  while (step < 3) {
    if (gameStep()) {
      step += 1;
    } else {
      break;
    }
  }

  if (step === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default game;
