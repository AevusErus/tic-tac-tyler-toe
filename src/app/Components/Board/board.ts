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
  player: string;
  playerTitle: string
  gameOver: boolean;
  tiles: Array<Tile> = [];
  n: number = 3;
  movecount: number = 0;
  boardState: string[][];
  // dialog: MatDialog;

  constructor(public dialog: MatDialog, private tileService: TileService) {
    this.tiles = this.tileService.getTiles();
    this.player = "X";
    this.playerTitle = 'Player X';
    this.gameOver = false;
    this.boardState = [["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]];
    this.movecount = 0;
  }
  resetBoard() {
    this.tiles = this.tileService.getTiles();
    this.player = "X";
    this.playerTitle = 'Player X';
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
      playerMessage = 'Player ' + player +' has won the game!';
    } else if (player === 'O') {
      playerMessage = 'Player ' + player + ' has won the game!';
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
  placeSymbol(tile) {
    if (this.gameOver) {
      console.log("Game is Over");
      return;
    }
    if (this.boardState[tile.column][tile.row] == "B") {
      this.boardState[tile.column][tile.row] = this.player;
      tile.imagePath = "../assets/" + this.player + ".png";
      this.movecount++;
      this.checkwin(tile.column, tile.row);
        if (this.player == "X") {
          this.player = "O";
        }else {
          this.player = "X";}
      this.playerTitle = 'Player ' + this.player;
    } else {
        console.log("Must pick a blank space! It is still " + this.player + "'s turn.");
    }
  }
  checkwin( column: number, row:number ) {
    if (
      this.checkColumnRow(column, row) ||
      this.checkDiagBot() ||
      this.checkDiagTop()
    ) {
      this.openDialog(this.player);
      this.gameOver = true;
    }
    // check draw condition
    else if (this.movecount == 9) {
      this.openDialog('Draw');
      this.gameOver = true;
    }
  }
  checkColumnRow( column, row:number ) {
    if (this.boardState[0][row] == this.boardState[1][row] &&
        this.boardState[0][row] == this.boardState[2][row] &&
        this.boardState[0][row] != "B") {
    this.setColor(0, row, this.player);
    this.setColor(1, row, this.player);
    this.setColor(2, row, this.player);
    return true
    } else 
    if (this.boardState[column][0] == this.boardState[column][1] &&
        this.boardState[column][0] == this.boardState[column][2] &&
        this.boardState[column][0] != "B") {
    this.setColor(column, 0, this.player);
    this.setColor(column, 1, this.player);
    this.setColor(column, 2, this.player);
    return true
    
      }else {}
  }
  checkDiagBot() {
    if (this.boardState[0][0] == this.boardState[1][1] &&
      this.boardState[0][0] == this.boardState[2][2] &&
      this.boardState[0][0] != "B") {
    this.setColor(0, 0, this.player);
    this.setColor(1, 1, this.player);
    this.setColor(2, 2, this.player);
    return true
    } else {}
  }
  checkDiagTop() {
    if (this.boardState[0][2] == this.boardState[1][1] &&
      this.boardState[0][2] == this.boardState[2][0] &&
      this.boardState[0][2] != "B") {
    this.setColor(0, 2, this.player);
    this.setColor(1, 1, this.player);
    this.setColor(2, 0, this.player);
    return true
    } else {}
  }
  setColor(column, row, player) {
    this.tiles.forEach(function(tile) {
      if (tile.row == row && tile.column == column) {
        console.log(tile.imagePath);
        console.log(tile.color);
        tile.color = '#859247';
        console.log(tile.imagePath);
        console.log(tile.color);
      }
    });
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
