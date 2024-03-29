import antelopeImage from './antelope.png';
import { Animal } from '../Animal';

const ANTELOPE_STRENGTH = 2;
const ANTELOPE_INITIATIVE = 5;

export class Antelope extends Animal {
  constructor() {
    super(antelopeImage, ANTELOPE_STRENGTH, ANTELOPE_INITIATIVE);
  }

  render() {

  }
}
