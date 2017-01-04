// @flow
import readlineSync from 'readline-sync';
import BrainGame from '../index';

export default class BrainEven {
  static play() {
    console.log(BrainEven.gameDescription());

    const playerName = BrainGame.getPlayerName();
    BrainGame.greetPlayer(playerName);

    let step = 0;
    const maxSteps = 3;

    while (step < maxSteps) {
      if (BrainEven.gameStep()) {
        step += 1;
      } else {
        break;
      }
    }

    const playerIsWin = step === maxSteps;

    if (playerIsWin) {
      BrainGame.congratulatePlayer(playerName);
    }
  }

  static gameDescription() {
    return 'Answer "yes" if number odd otherwise answer "no".';
  }

  static gameStep() {
    const number = BrainEven.getRandomNumber(0, 100);

    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = BrainEven.correctAnswer(number);

    if (answer === correctAnswer) {
      console.log('Correct!');
      return true;
    }

    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

    return false;
  }

  static getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  static correctAnswer(number) {
    return number % 2 === 0 ? 'yes' : 'no';
  }
}
