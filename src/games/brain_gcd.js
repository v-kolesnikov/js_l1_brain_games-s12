// @flow

import game from '..';
import * as Utils from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) =>
  (b === 0 ? a : gcd(b, a % b));

const nextQuestion = (): { question: string, answer: string } => {
  const number1 = Utils.getRandomNumber(0, 100);
  const number2 = Utils.getRandomNumber(0, 100);

  const question = [number1, number2].join(' ');
  const answer = String(gcd(number1, number2));

  return { question, answer };
};

const gcdGame = () =>
  game(description, nextQuestion);

export default gcdGame;
