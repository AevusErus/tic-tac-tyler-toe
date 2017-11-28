import { Component, ViewEncapsulation, Inject } from '@angular/core';
import {Tile, TileService} from '../../services/tile-service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import WinDialogDialogComponent from '../WinDialog/win-dialog';

@Component({
  selector: "app-board",
  templateUrl: "./board.html",
  styleUrls: ["./board.css"]
})
export class BoardComponent {
  player: boolean;
  playerTitle: string
  gameOver: boolean;
  tiles: Array<Tile> = [];
  n: number = 3;
  movecount: number = 0;
  // declare board array to keep track of moves, initialize it with 'B' blank entries
  boardState: string[][];
  // dialog: MatDialog;

  constructor(public dialog: MatDialog, private tileService: TileService) {
    this.tiles = this.tileService.getTiles();
    this.player = true;
    this.playerTitle = 'Player One (X)';
    this.gameOver = false;
    this.boardState = [["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]];
    this.movecount = 0;
  }
  resetBoard() {
    this.tiles = this.tileService.getTiles();
    this.player = true;
    this.playerTitle = 'Player One (X)';
    this.gameOver = false;
    this.boardState = [["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]];
    this.movecount = 0;
  }
  openDialog(player: string): void {
    let playerMessage: string;
    console.log(player);
    if (player === 'Draw') {
      playerMessage = 'The game is a draw!';
    } else if (player === 'X') {
      playerMessage = 'Player One has won the game!';
    } else if (player === 'O') {
      playerMessage = 'Player Two has won the game!';
    } else {
      playerMessage = 'Something horrible has happened! What have you done to me?!';
    }
    const dialogRef = this.dialog.open(WinDialogDialogComponent, {
      width: "300px",
      data: { playerMessage: playerMessage , reset: false }
    });
    dialogRef.afterClosed().subscribe(results => {
      console.log("The dialog was closed");
      if (results) {
        this.resetBoard();
      }
    });
  }

  setColor(row: number, column: number) {
    this.tiles.forEach(function(tile) {
      // console.log(tile);
      if (tile.row == row && tile.column == column) {
        console.log(tile);
        tile.imagePath = "";
        tile.imagePath = "../assets/x.png";
        tile.color = 'green';
      }
    });
  }

  placeSymbol(tile) {
    // check to see if the game is over.
    if (this.gameOver) {
      console.log("Game is Over");
      return;
    }
    // player X's turn
    if (this.player) {
      //check if the tile is blank
      if (this.boardState[tile.column][tile.row] == "B") {
        tile.imagePath = "../assets/x.png";
        this.boardState[tile.column][tile.row] = "X";
        this.movecount++;
        this.player = !this.player;
        this.playerTitle = 'Player Two (O)';
      } else {
        console.log("Must pick a blank space! It is still X's turn.");
      }
      // player Y's turn
    } else {
      //check if the tile is blank
      if (this.boardState[tile.column][tile.row] == "B") {
        tile.imagePath = "../assets/0.png";
        this.boardState[tile.column][tile.row] = "O";
        this.movecount++;
        this.player = !this.player;
        this.playerTitle = 'Player One (X)';
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
      this.setColor(0, 0);
      console.log(this.tiles[0]);
      console.log("Player: " + this.boardState[0][0] + " has won!");
      this.openDialog(this.boardState[0][0]);
      this.gameOver = true;
    }
    // second row
    else if (
      this.boardState[0][1] == this.boardState[1][1] &&
      this.boardState[0][1] == this.boardState[2][1] &&
      this.boardState[0][1] != "B"
    ) {
      console.log("Player: " + this.boardState[0][1] + " has won!");
      this.openDialog(this.boardState[0][1]);
      this.gameOver = true;
    }
    // third row
    else if (
      this.boardState[0][2] == this.boardState[1][2] &&
      this.boardState[0][2] == this.boardState[2][2] &&
      this.boardState[0][2] != "B"
    ) {
      console.log("Player: " + this.boardState[0][2] + " has won!");
      this.openDialog(this.boardState[0][2]);
      this.gameOver = true;
    }
    // first column
    else if (
      this.boardState[0][0] == this.boardState[0][1] &&
      this.boardState[0][0] == this.boardState[0][2] &&
      this.boardState[0][0] != "B"
    ) {
      console.log("Player: " + this.boardState[0][0] + " has won!");
      this.openDialog(this.boardState[0][0]);
      this.gameOver = true;
    }
    // second column
    else if (
      this.boardState[1][0] == this.boardState[1][1] &&
      this.boardState[1][0] == this.boardState[1][2] &&
      this.boardState[1][0] != "B"
    ) {
      console.log("Player: " + this.boardState[1][0] + " has won!");
      this.openDialog(this.boardState[1][0]);
      this.gameOver = true;
    }
    // third column
    else if (
      this.boardState[2][0] == this.boardState[2][1] &&
      this.boardState[2][0] == this.boardState[2][2] &&
      this.boardState[2][0] != "B"
    ) {
      console.log("Player: " + this.boardState[2][0] + " has won!");
      this.openDialog(this.boardState[2][0]);
      this.gameOver = true;
    }
    // diag bottom-right
    else if (
      this.boardState[0][0] == this.boardState[1][1] &&
      this.boardState[0][0] == this.boardState[2][2] &&
      this.boardState[0][0] != "B"
    ) {
      console.log("Player: " + this.boardState[0][0] + " has won!");
      this.openDialog(this.boardState[0][0]);
      this.gameOver = true;
    }
    // diag top-right
    else if (
      this.boardState[0][2] == this.boardState[1][1] &&
      this.boardState[0][2] == this.boardState[2][0] &&
      this.boardState[0][2] != "B"
    ) {
      console.log("Player: " + this.boardState[0][2] + " has won!");
      this.openDialog(this.boardState[0][2]);
      this.gameOver = true;
    }
    // check draw condition
    else if (this.movecount == 9) {
      console.log("This game has resulted in a draw");
      this.openDialog('Draw');
      this.gameOver = true;
    }
  }
}

@Component({
  selector: 'app-win-dialog-dialog',
  templateUrl: 'win-dialog-dialog.html'
})
export class WinDialogDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<WinDialogDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
