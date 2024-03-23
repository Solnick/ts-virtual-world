import foxImage from './fox.png';
import { Animal } from '../Animal';

const FOX_STRENGTH = 4;
const FOX_INITIATIVE = 4;

export class Fox extends Animal {
  constructor() {
    super(foxImage, FOX_INITIATIVE, FOX_STRENGTH);
  }

  render() {

  }
}
