import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tiles = [
    { text: 'One', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Four', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Five', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Six', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Seven', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Eight', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Nine', cols: 1, rows: 1, color: 'lightblue' }
  ];

  placeSymbol(tile) {
    tile.color = 'red';
    // console.log(tile);
}}
