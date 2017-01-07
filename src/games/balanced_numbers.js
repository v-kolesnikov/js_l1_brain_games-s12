// @flow

import brainGame from '..';
import * as Utils from '../utils';

const description = 'Balance the given number.';

const toDigits = n => n
  .toString()
  .split('')
  .map(x => parseInt(x, 10))
  .slice()
  .sort();

const balanced = (n) => {
  const digits = toDigits(n);

  const balancedDigits = digits.reduce((acc) => {
    const lastIdx = acc.length - 1;
    const diffVal = acc[lastIdx] - acc[0];

    if (diffVal <= 1) {
      return acc;
    }

    const halfOfDiff = diffVal % 2 === 0 ? diffVal / 2 : (diffVal - 1) / 2;

    const firstValue = acc[0] + halfOfDiff;
    const lastValue = acc[lastIdx] - halfOfDiff;
    const middleValues = acc.slice(1, lastIdx);

    return [firstValue, ...middleValues, lastValue].slice().sort();
  }, digits);

  return parseInt(balancedDigits.join(''), 10);
};

const nextQuestion = (): { question: string, answer: string } => {
  const number = Utils.getRandomNumber(10, 10000);
  const answer = String(balanced(number));
  const question = String(number);

  return { question, answer };
};

export default () => brainGame(description, nextQuestion);
