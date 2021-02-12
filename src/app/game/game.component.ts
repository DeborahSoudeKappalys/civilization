import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JeuService } from '../jeu.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  current: number = 1;
  constructor(private jeuService: JeuService, private router: Router) { }

  ngOnInit(): void {
    if (this.jeuService.numberOfPlayers.value === 0) {
      this.router.navigateByUrl('/initialisation');
    }
  }

  receiveMap(event: number) {
    this.current = event;
  }
}
