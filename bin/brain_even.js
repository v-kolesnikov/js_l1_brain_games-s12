#!/usr/bin/env node

import BrainGame from '../src/index';
import BrainEven from '../src/games/brain_even';

BrainGame.welcome();
BrainEven.play();
