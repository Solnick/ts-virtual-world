import './style.css'
import './shared/styles/variables.css'
import { appContainer, BOARD_SIZE } from './shared/constants';
import { Board } from './app/Board';

if(!appContainer) {
  throw new Error("No app container");
}

new Board(BOARD_SIZE.x, BOARD_SIZE.y);

