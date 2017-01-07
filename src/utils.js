// @flow

// eslint-disable-next-line import/prefer-default-export
export const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;
