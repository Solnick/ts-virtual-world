import './board.css'
import { appContainer } from '../../shared/constants';
import { Renderable } from '../../shared/types/renderable.interface';
import { Tile } from '../Tile';
import { Fox } from '../Fox';

export class Board implements Renderable {
  private readonly tiles: Array<Array<Tile>> = [];
  readonly container = document.createElement('div');
  readonly rows: Array<HTMLDivElement> = [];
  constructor(
    private readonly xSize: number,
    private readonly ySize: number,
  ) {
    this.initialize()
  }

  private initializeRows() {
    for(let x = 0; x < this.xSize; x++) {
      const row = document.createElement('div');
      row.classList.add('row')
      this.rows[x] = row;
      this.container.append(row);
    }
  }
  private initialize() {
    appContainer!.append(this.container);
    this.container.classList.add('board')
    this.initializeRows();
    this.forEveryTile((x, y) => {
      const tile = new Tile();
      if(!this.tiles[x]) {
        this.tiles[x] = []
      }
      this.tiles[x][y] = tile;
      this.rows[x].append(tile.container);
    })
    this.initializeOrganisms()
    this.render();
  }

  private initializeOrganisms() {
    this.tiles[0][0].addOrganism(new Fox());
  }

  render() {
    this.forEveryTile((x, y) => {
      this.tiles[x][y].render();
    })
  }

  private forEveryTile(action: (x: number, y: number) => void) {
    for(let x = 0; x < this.xSize; x++) {
      for(let y = 0; y < this.ySize; y++) {
        action(x, y)
      }
    }
  }
}
