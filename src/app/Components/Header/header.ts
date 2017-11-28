import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})

export default class HeaderComponent {

  @Input() player: string;

  constructor() { }
}
