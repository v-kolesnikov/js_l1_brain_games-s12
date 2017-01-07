// @flow

import readlineSync from 'readline-sync';

const congratulatePlayer = (playerName) => {
  console.log(`Congratulations, ${playerName}!`);
};

const getPlayerName = (): string =>
  readlineSync.question('May I have your name? ');

const greetPlayer = (playerName: string) =>
  console.log(`Hello, ${playerName}!`);

const game = (
  gameDescription: string,
  nextQuestion: Function,
  maxSteps : number = 3,
) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);

  const playerName = getPlayerName();
  greetPlayer(playerName);

  let step = 0;

  while (step < maxSteps) {
    const { question, answer } = nextQuestion();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
      step += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      break;
    }
  }

  const playerIsWin = step === maxSteps;

  if (playerIsWin) {
    congratulatePlayer(playerName);
  }
};

export default game;
