import { Component, ViewEncapsulation } from '@angular/core';
import {Tile, TileService} from '../../services/tile-service';

@Component({
  selector: "app-board",
  templateUrl: "./board.html",
  styleUrls: ["./board.css"]
})
export default class BoardComponent {
  player: boolean;
  tiles: Array<Tile> = [];
  n: number = 3;
  movecount: number = 0;
  // declare board array to keep track of moves, initialize it with 'B' blank entries
  boardState: String[][];

  constructor(private tileService: TileService) {
    this.tiles = this.tileService.getTiles();
    this.player = true;
    this.boardState = [["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]];
    this.movecount = 0
  }

  resetBoard() {
    this.tiles = this.tileService.getTiles();
    this.player = true;
    this.boardState = [["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]];
    this.movecount = 0;
  }

  placeSymbol(tile) {
    // player X's turn
    if (this.player) {
      //check if the tile is blank
      if (this.boardState[tile.column - 1][tile.row - 1] == "B") {
        tile.imagePath = "../assets/x.png";
        this.boardState[tile.column - 1][tile.row - 1] = "X";
        this.movecount++;
        this.player = !this.player;
      } else {
        console.log("Must pick a blank space! It is still X's turn.");
      }
      // player Y's turn
    } else {
      //check if the tile is blank
      if (this.boardState[tile.column - 1][tile.row - 1] == "B") {
        tile.imagePath = "../assets/0.png";
        this.boardState[tile.column - 1][tile.row - 1] = "O";
        this.movecount++;
        this.player = !this.player;
      } else {
        console.log("Must pick a blank space! It is still O's turn.");
      }
    }

    // manually check win condition, refactor this later!
    // first row
    if (
      this.boardState[0][0] == this.boardState[1][0] &&
      this.boardState[0][0] == this.boardState[2][0] &&
      this.boardState[0][0] != "B"
    ) {
      console.log("Player: " + this.boardState[0][0] + " has won!");
    }
    // second row
    if (
      this.boardState[0][1] == this.boardState[1][1] &&
      this.boardState[0][1] == this.boardState[2][1] &&
      this.boardState[0][1] != "B"
    ) {
      console.log("Player: " + this.boardState[0][1] + " has won!");
    }
    // third row
    if (
      this.boardState[0][2] == this.boardState[1][2] &&
      this.boardState[0][2] == this.boardState[2][2] &&
      this.boardState[0][2] != "B"
    ) {
      console.log("Player: " + this.boardState[0][2] + " has won!");
    }
    // first column
    if (
      this.boardState[0][0] == this.boardState[0][1] &&
      this.boardState[0][0] == this.boardState[0][2] &&
      this.boardState[0][0] != "B"
    ) {
      console.log("Player: " + this.boardState[0][0] + " has won!");
    }
    // second column
    if (
      this.boardState[1][0] == this.boardState[1][1] &&
      this.boardState[1][0] == this.boardState[1][2] &&
      this.boardState[1][0] != "B"
    ) {
      console.log("Player: " + this.boardState[1][0] + " has won!");
    }
    // third column
    if (
      this.boardState[2][0] == this.boardState[2][1] &&
      this.boardState[2][0] == this.boardState[2][2] &&
      this.boardState[2][0] != "B"
    ) {
      console.log("Player: " + this.boardState[2][0] + " has won!");
    }
    // diag bottom-right
    if (
      this.boardState[0][0] == this.boardState[1][1] &&
      this.boardState[0][0] == this.boardState[2][2] &&
      this.boardState[0][0] != "B"
    ) {
      console.log("Player: " + this.boardState[0][0] + " has won!");
    }
    // diag top-right
    if (
      this.boardState[0][2] == this.boardState[1][1] &&
      this.boardState[0][2] == this.boardState[2][0] &&
      this.boardState[0][2] != "B"
    ) {
      console.log("Player: " + this.boardState[0][2] + " has won!");
    }
    // check draw condition
    if (this.movecount == 8) {
      console.log("This game has resulted in a draw");
    }
  }
}
