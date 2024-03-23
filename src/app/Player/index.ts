import PlayerImage from './player.png';
import { Animal } from '../Animal';
import { Board } from '../Board';

const PLAYER_STRENGTH = 5;
const PLAYER_INITIATIVE = 5;

export class Player extends Animal {
  constructor(private readonly board: Board) {
    super(PlayerImage, PLAYER_INITIATIVE, PLAYER_STRENGTH);
  }
  initializeMovementHandlers() {
    document.addEventListener(
      "keyup",
      this.moveKeyHandler
    )
  }

  moveKeyHandler(event: KeyboardEvent) {
    switch (event.code) {
      case "KeyS":
      case "ArrowDown":

        break;
      case "KeyW":
      case "ArrowUp":

        break;
      case "KeyA":
      case "ArrowLeft":

        break;
      case "KeyD":
      case "ArrowRight":

        break;
    }
  }

  moveIfPossible() {
    const organismStandingOnTheTile = this.board.getTileOrganism()
    // if()
  }
}
