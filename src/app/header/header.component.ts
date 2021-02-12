import { Component, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { JeuService } from '../jeu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  @Output() sendCurrent: EventEmitter<number> = new EventEmitter();
  current: number = 0;
  players = this.jeuService.getPlayers();

  // Ressources
  corn?: number;
  coin?: number;
  wood?: number;
  stone?: number;
  fish?: number;
  silk?: number;

  // Jeu
  turn!: number;

  constructor(private jeuService: JeuService) {
    this.jeuService.currentPlayer.subscribe((value) => {
      this.current = value;
      this.corn = this.jeuService.getPlayer(value).getRessourceById(1);
      this.fish = this.jeuService.getPlayer(value).getRessourceById(2);
      this.wood = this.jeuService.getPlayer(value).getRessourceById(3);
      this.stone = this.jeuService.getPlayer(value).getRessourceById(4);
      this.silk = this.jeuService.getPlayer(value).getRessourceById(5);
      this.coin = this.jeuService.getPlayer(value).getRessourceById(6);
      this.turn = this.jeuService.getTurn();
    });

    this.jeuService.nbOfActions.subscribe((value) => {
      this.corn = this.jeuService.getPlayer(this.jeuService.currentPlayer.value).getRessourceById(1);
      this.coin = this.jeuService.getPlayer(this.jeuService.currentPlayer.value).getRessourceById(2);
      this.wood = this.jeuService.getPlayer(this.jeuService.currentPlayer.value).getRessourceById(3);
      this.stone = this.jeuService.getPlayer(this.jeuService.currentPlayer.value).getRessourceById(4);
      this.fish = this.jeuService.getPlayer(this.jeuService.currentPlayer.value).getRessourceById(5);
      this.silk = this.jeuService.getPlayer(this.jeuService.currentPlayer.value).getRessourceById(6);
    });

    this.jeuService.turn.subscribe((value) => {
      this.turn = value;
    });
  }
  
  ngAfterViewInit(): void {
    this.jeuService.colorizeTheNames();
  }
}
