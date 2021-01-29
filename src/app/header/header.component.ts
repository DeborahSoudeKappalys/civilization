import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JeuService } from '../jeu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sendCurrent: EventEmitter<number> = new EventEmitter();
  current: number = 1;
  players = this.jeuService.getPlayers();

  // Ressources
  corn?: number;
  coin?: number;
  wood?: number;
  stone?: number;
  fish?: number;
  silk?: number;

  // Jeu
  turn: number = 1;

  constructor(private jeuService: JeuService) { }

  ngOnInit(): void {
    this.current = this.jeuService.getCurrentPlayer();
    this.corn = this.jeuService.getRessourceValue(1);
    this.coin = this.jeuService.getRessourceValue(2);
    this.wood = this.jeuService.getRessourceValue(3);
    this.stone = this.jeuService.getRessourceValue(4);
    this.fish = this.jeuService.getRessourceValue(5);
    this.silk = this.jeuService.getRessourceValue(6);
    this.refreshMap();

    this.turn = this.jeuService.getTurn();

  }

  getRessourceValue(idRessource: number) {
    return this.jeuService.getPlayers()[this.current-1].getRessourceById(idRessource);
  }

  refreshMap()
  {
    this.sendCurrent.emit(this.current);
  }

  nextTurn() {
    this.turn++;
    this.jeuService.refreshRessources();
  }
}
