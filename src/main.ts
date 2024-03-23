import './style.css'
import { appContainer, BOARD_SIZE } from './app/constants';
import { Board } from './app/Board';

if(!appContainer) {
  throw new Error("No app container");
}

new Board(BOARD_SIZE.x, BOARD_SIZE.y);

