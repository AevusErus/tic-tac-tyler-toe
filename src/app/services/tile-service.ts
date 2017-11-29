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

  getTile(row: number, column: number) {
    let returnTile: Tile;
    // console.log("You are getting tile.");
    tiles.forEach(function(tile) {
      // console.log(tile);
      if (tile.row == row && tile.column == column) {
        console.log("You found a match!");
        returnTile = tile;
      }
      });
      return returnTile;
    }
  }

const tiles = [
  {
    text: "One",
    cols: 1,
    rows: 1,
    color: "#3c4a84",
    imagePath: "",
    row: 0,
    column: 0
  },
  {
    text: "Two",
    cols: 1,
    rows: 1,
    color: "#3c4a84",
    imagePath: "",
    row: 0,
    column: 1
  },
  {
    text: "Three",
    cols: 1,
    rows: 1,
    color: "#3c4a84",
    imagePath: "",
    row: 0,
    column: 2
  },
  {
    text: "Four",
    cols: 1,
    rows: 1,
    color: "#3c4a84",
    imagePath: "",
    row: 1,
    column: 0
  },
  {
    text: "Five",
    cols: 1,
    rows: 1,
    color: "#3c4a84",
    imagePath: "",
    row: 1,
    column: 1
  },
  {
    text: "Six",
    cols: 1,
    rows: 1,
    color: "#3c4a84",
    imagePath: "",
    row: 1,
    column: 2
  },
  {
    text: "Seven",
    cols: 1,
    rows: 1,
    color: "#3c4a84",
    imagePath: "",
    row: 2,
    column: 0
  },
  {
    text: "Eight",
    cols: 1,
    rows: 1,
    color: "#3c4a84",
    imagePath: "",
    row: 2,
    column: 1
  },
  {
    text: "Nine",
    cols: 1,
    rows: 1,
    color: "#3c4a84",
    imagePath: "",
    row: 2,
    column: 2
  }
];

//{ text: "One", cols: 1, rows: 1, color: "lightblue", imagePath: "", row: 1, column: 1 }
