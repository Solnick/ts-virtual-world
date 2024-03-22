import './organism.css';
import { Renderable } from '../../shared/types/renderable.interface';

export abstract class Organism implements Renderable {
  readonly container = document.createElement('img');

  constructor() {
    this.container.classList.add('organism');
  }

  render() {

  }
}
