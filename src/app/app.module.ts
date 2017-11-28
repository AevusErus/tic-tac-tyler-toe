import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatDialogModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import ApplicationComponent from './Components/Application/application';
import { BoardComponent, WinDialogDialogComponent } from './Components/Board/board';
import HeaderComponent from './Components/Header/header';
import { TileService } from './services/tile-service';
// import { BoardService } from './services/board-service';


@NgModule({
  declarations: [ApplicationComponent, BoardComponent, WinDialogDialogComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
   MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [TileService],
  bootstrap: [ApplicationComponent, WinDialogDialogComponent]
})
export class AppModule { }
