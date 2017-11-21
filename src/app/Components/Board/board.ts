import { Component, ViewEncapsulation } from '@angular/core';
import {Tile, TileService} from '../../Services/tile-service';

@Component({
  selector: 'app-board',
  templateUrl: './board.html'
})
export default class BoardComponenet {
  player: boolean;
  tiles: Array<Tile> = [];
  n: number = 3;
  movecount: number = 0;
  // declare board array to keep track of moves, initialize it with 'B' blank entries
  board: String[][];

  constructor(private tileService: TileService) {
    this.tiles = this.tileService.getTiles();
    this.player = true;
    this.board = [['B', 'B', 'B'], ['B', 'B', 'B'], ['B', 'B', 'B']];
  }
}
