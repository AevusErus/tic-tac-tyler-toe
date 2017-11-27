import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-win-dialog',
  templateUrl: './win-dialog.html',
  styleUrls: ['./win-dialog.css']
})

export default class WinDialogComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(player: string): void {
    const dialogRef = this.dialog.open(WinDialogDialogComponent, {
      width: '250px',
      data: { player: player}
    });

    dialogRef.afterClosed().subscribe(results => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'app-win-dialog-dialog',
  templateUrl: 'win-dialog-dialog.html'
})

export class WinDialogDialogComponent {
  constructor( public dialogRef: MatDialogRef<WinDialogDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
