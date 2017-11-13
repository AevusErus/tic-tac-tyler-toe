import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tiles = [
    { text: 'One', cols: 1, rows: 1, color: 'lightblue', imagePath: '' },
    { text: 'Two', cols: 1, rows: 1, color: 'lightblue', imagePath: '' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightblue', imagePath: '' },
    { text: 'Four', cols: 1, rows: 1, color: 'lightblue', imagePath: '' },
    { text: 'Five', cols: 1, rows: 1, color: 'lightblue', imagePath: '' },
    { text: 'Six', cols: 1, rows: 1, color: 'lightblue', imagePath: '' },
    { text: 'Seven', cols: 1, rows: 1, color: 'lightblue', imagePath: '' },
    { text: 'Eight', cols: 1, rows: 1, color: 'lightblue', imagePath: '' },
    { text: 'Nine', cols: 1, rows: 1, color: 'lightblue', imagePath: '' }
  ];
  // public xImage = require("./Images/x.png");

  placeSymbol(tile) {
    tile.imagePath = '../Images/x.png';
    console.log(tile);
}}
