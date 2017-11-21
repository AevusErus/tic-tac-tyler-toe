import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './application.html',
  styleUrls: ['./application.css']
})
export default class AppComponent {
  
  placeSymbol(tile) {
    // player X's turn
    if (this.playerBool) {
      //check if the tile is blank
      if (this.board[tile.column-1][tile.row-1] == "B") {
        tile.imagePath = '../assets/x.png';
        this.board[tile.column-1][tile.row-1] = "X";
        this.movecount++;
        this.playerBool = !this.playerBool;
      } else {
        console.log("Must pick a blank space! It is still X's turn.");
      }
    // player Y's turn
    } else {
      //check if the tile is blank
      if (this.board[tile.column-1][tile.row-1] == "B") {
        tile.imagePath = '../assets/0.png';
        this.board[tile.column-1][tile.row-1] = "O";
        this.movecount++;
        this.playerBool = !this.playerBool;
      } else {
        console.log("Must pick a blank space! It is still O's turn.");
      }
    }

    // manually check win condition, refactor this later!
    // first row
    if (this.board[0][0] == this.board[1][0] && this.board[0][0] == this.board[2][0] && this.board[0][0] != "B") {
      console.log("Player: " + this.board[0][0] + " has won!");
    }
    // second row
    if (this.board[0][1] == this.board[1][1] && this.board[0][1] == this.board[2][1] && this.board[0][1] != "B") {
      console.log("Player: " + this.board[0][1] + " has won!");
    }
    // third row
    if (this.board[0][2] == this.board[1][2] && this.board[0][2] == this.board[2][2] && this.board[0][2] != "B") {
      console.log("Player: " + this.board[0][2] + " has won!");
    }
    // first column
    if (this.board[0][0] == this.board[0][1] && this.board[0][0] == this.board[0][2] && this.board[0][0] != "B") {
      console.log("Player: " + this.board[0][0] + " has won!");
    }
    // second column
    if (this.board[1][0] == this.board[1][1] && this.board[1][0] == this.board[1][2] && this.board[1][0] != "B") {
      console.log("Player: " + this.board[1][0] + " has won!");
    }
    // third column
    if (this.board[2][0] == this.board[2][1] && this.board[2][0] == this.board[2][2] && this.board[2][0] != "B") {
      console.log("Player: " + this.board[2][0] + " has won!");
    }
    // diag bottom-right
    if (this.board[0][0] == this.board[1][1] && this.board[0][0] == this.board[2][2] && this.board[0][0] != "B") {
      console.log("Player: " + this.board[0][0] + " has won!");
    }
    // diag top-right
    if (this.board[0][2] == this.board[1][1] && this.board[0][2] == this.board[2][0] && this.board[0][2] != "B") {
      console.log("Player: " + this.board[0][2] + " has won!");
    }
    // check draw condition
    if (this.movecount == 8) {
      console.log("This game has resulted in a draw");
    }

}
}
