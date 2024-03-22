import { Organism } from '../Organism';

export abstract class Animal extends Organism {
  constructor(
    readonly initiative: number,
    readonly strength: number,
  ) {
    super();
  }

  render() {

  }
}
