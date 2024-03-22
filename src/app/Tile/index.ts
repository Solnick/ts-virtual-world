import { Renderable } from '../types/renderable.interface';
import './tile.css';

export class Tile implements Renderable {
  readonly container = document.createElement('div');
  constructor() {
    this.initialize();
  }

  initialize() {
    this.container.classList.add('tile');
  }

  render() {

  }
}
