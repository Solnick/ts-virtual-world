import './organism.css';
import { Renderable } from '../../shared/types/renderable.interface';

export abstract class Organism implements Renderable {
  readonly container = document.createElement('img');

  constructor(
    readonly imageSrc: string,
    readonly initiative: number,
  ) {
    this.container.classList.add('organism');
    this.container.src = imageSrc;
  }

  render() {

  }
}
