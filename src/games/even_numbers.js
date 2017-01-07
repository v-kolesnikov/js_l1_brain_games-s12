// @flow

import brainGame from '..';
import * as Utils from '../utils';

const description = 'Answer "yes" if number odd otherwise answer "no".';

const nextQuestion = (): { question: string, answer: string } => {
  const number = Utils.getRandomNumber(0, 100);
  const answer = number % 2 === 0 ? 'yes' : 'no';
  const question = String(number);

  return { question, answer };
};

export default () => brainGame(description, nextQuestion);
