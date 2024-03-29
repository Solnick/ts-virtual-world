import { Organism } from '../Organism';

export abstract class Animal extends Organism {
  constructor(
    imageSrc: string,
    initiative: number,
    readonly strength: number,
  ) {
    super(imageSrc, initiative);
  }

  render() {

  }
}
