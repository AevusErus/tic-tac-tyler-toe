import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import ApplicationComponent from './Components/Application/application';
import BoardComponent from './Components/Board/board';
import HeaderComponenet from './Components/Header/header';


@NgModule({
  declarations: [ApplicationComponent, BoardComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [ApplicationComponent]
})
export class AppModule { }
