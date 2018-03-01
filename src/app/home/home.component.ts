import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public fullScreenApp = 0 ;
  constructor() { }

  ngOnInit() {
  }

  onFullScren(position: number) {
    this.fullScreenApp = position;
    console.log('position changed');
  }

  resetScreen() {
    this.fullScreenApp = 0;
  }

}
