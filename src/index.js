// @flow

import readlineSync from 'readline-sync';

export default class BrainGame {
  static welcome() {
    console.log('Welcome to the Brain Games!');
  }

  static getPlayerName() {
    return readlineSync.question('May I have your name? ');
  }

  static greetPlayer(playerName) {
    console.log(`Hello, ${playerName}!`);
  }

  static congratulatePlayer(playerName) {
    console.log(`Congratulations, ${playerName}!`);
  }
}
