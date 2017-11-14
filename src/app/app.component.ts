import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public playerBool = true;
  tiles = [
    { text: 'One', cols: 1, rows: 1, color: 'lightblue', imagePath: '', row: 1 , column: 1 },
    { text: 'Two', cols: 1, rows: 1, color: 'lightblue', imagePath: '', row: 1, column: 2  },
    { text: 'Three', cols: 1, rows: 1, color: 'lightblue', imagePath: '', row: 1, column: 3  },
    { text: 'Four', cols: 1, rows: 1, color: 'lightblue', imagePath: '', row: 2, column: 1  },
    { text: 'Five', cols: 1, rows: 1, color: 'lightblue', imagePath: '', row: 2, column: 2  },
    { text: 'Six', cols: 1, rows: 1, color: 'lightblue', imagePath: '', row: 2, column: 3  },
    { text: 'Seven', cols: 1, rows: 1, color: 'lightblue', imagePath: '', row: 3, column: 1  },
    { text: 'Eight', cols: 1, rows: 1, color: 'lightblue', imagePath: '', row: 3, column: 2  },
    { text: 'Nine', cols: 1, rows: 1, color: 'lightblue', imagePath: '', row: 3, column: 3 }
  ];
  // public xImage = require("./Images/x.png");

  placeSymbol(tile) {
    if ( this.playerBool ) {
    tile.imagePath = '../assets/x.png';
    } else {
      tile.imagePath = '../assets/0.png';
    }
    this.playerBool = !this.playerBool;
    // console.log(tile);
}
  evaluate(value) {
    console.log(value);
  }
}
