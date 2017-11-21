export class Tile {
  constructor(
    public text: string,
    public cols: number,
    public rows: number,
    public color: string,
    public imagePath: string,
    public row: number,
    public column: number) {

    }
}

export class TileService {
  getTiles(): Array<Tile> {
    return tiles.map(t => new Tile(t.text, t.cols, t.rows, t.color, t.imagePath, t.row, t.column));
  }
}

const tiles = [
  {
    text: "One",
    cols: 1,
    rows: 1,
    color: "lightblue",
    imagePath: "",
    row: 1,
    column: 1
  },
  {
    text: "Two",
    cols: 1,
    rows: 1,
    color: "lightblue",
    imagePath: "",
    row: 1,
    column: 2
  },
  {
    text: "Three",
    cols: 1,
    rows: 1,
    color: "lightblue",
    imagePath: "",
    row: 1,
    column: 3
  },
  {
    text: "Four",
    cols: 1,
    rows: 1,
    color: "lightblue",
    imagePath: "",
    row: 2,
    column: 1
  },
  {
    text: "Five",
    cols: 1,
    rows: 1,
    color: "lightblue",
    imagePath: "",
    row: 2,
    column: 2
  },
  {
    text: "Six",
    cols: 1,
    rows: 1,
    color: "lightblue",
    imagePath: "",
    row: 2,
    column: 3
  },
  {
    text: "Seven",
    cols: 1,
    rows: 1,
    color: "lightblue",
    imagePath: "",
    row: 3,
    column: 1
  },
  {
    text: "Eight",
    cols: 1,
    rows: 1,
    color: "lightblue",
    imagePath: "",
    row: 3,
    column: 2
  },
  {
    text: "Nine",
    cols: 1,
    rows: 1,
    color: "lightblue",
    imagePath: "",
    row: 3,
    column: 3
  }
];

//{ text: "One", cols: 1, rows: 1, color: "lightblue", imagePath: "", row: 1, column: 1 }
