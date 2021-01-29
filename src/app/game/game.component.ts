import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  current: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  receiveMap(event: number) {
    this.current = event;
  }

}
