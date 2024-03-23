import { Renderable } from '../../shared/types/renderable.interface';
import './tile.css';
import { Organism } from '../Organism';

export class Tile implements Renderable {
  readonly container = document.createElement('div');
  organism: Organism | null = null;
  constructor() {
    this.initialize();
  }

  initialize() {
    this.container.classList.add('tile');
  }

  setOrganism(organism: Organism) {
    this.organism = organism;
  }

  render() {
    this.container.innerHTML = '';
    if (this.organism) {
      this.container.append(this.organism?.container)
    }
  }
}
