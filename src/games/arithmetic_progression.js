// @flow

import brainGame from '..';
import * as Utils from '../utils';

const description = 'What number is missing in this progression?';

const makeHoles = (seq, index) =>
  [...seq.slice(0, index), '*', ...seq.slice(index + 1)];

const progression = (maxSeqSize = 10) => {
  const beginValue = Utils.getRandomNumber(1, 100);
  const commonDiff = Utils.getRandomNumber(2, 10);

  const iter = (prev, diff, max, acc) => {
    const next = prev + diff;
    return acc.length === max ? acc : iter(next, diff, max, [...acc, next]);
  };

  return iter(beginValue, commonDiff, maxSeqSize, []);
};

const nextQuestion = (): { question: string, answer: string } => {
  const sequence = progression();
  const holesIdx = Utils.getRandomNumber(0, sequence.length - 1);
  const question = makeHoles(sequence, holesIdx).toString();
  const answer = String(sequence[holesIdx]);

  return { question, answer };
};

export default () => brainGame(description, nextQuestion);
