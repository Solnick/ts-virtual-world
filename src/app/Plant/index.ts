import { Organism } from '../Organism';

const PLANT_INITIATIVE = 0;
export abstract class Plant extends Organism {
  constructor(
    imageSrc: string,
    private readonly chanceOfSpreadingPerRound: number = 0.1,
  ) {
    super(imageSrc, PLANT_INITIATIVE);
  }

  spread() {
    console.log(this.chanceOfSpreadingPerRound)
  }

  render() {

  }
}
