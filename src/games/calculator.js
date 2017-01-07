// @flow

import brainGame from '..';
import * as Utils from '../utils';

const description = 'What is the result of the expression?';

const operations = (): [string, Function][] =>
  [['+', (a, b) => a + b],
   ['-', (a, b) => a - b],
   ['*', (a, b) => a * b],
   ['/', (a, b) => a / b]];

const nextQuestion = (): { question: string, answer: string } => {
  const operand1 = Utils.getRandomNumber(0, 100);
  const operand2 = Utils.getRandomNumber(0, 100);
  const [op, fn] = operations()[Utils.getRandomNumber(0, 3)];
  const question = [operand1, op, operand2].join(' ');
  const answer = String(fn(operand1, operand2));

  return { question, answer };
};

export default () => brainGame(description, nextQuestion);
