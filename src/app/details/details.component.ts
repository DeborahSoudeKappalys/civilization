import { Component, OnInit, Input } from '@angular/core';
import { Canton } from '../classes/canton';
import { RessourcesService } from '../services/ressources.service';
import { Ressources } from '../classes/ressources';
import { JeuService } from '../jeu.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() canton?: Canton;
  selectedRessource?: Ressources;
  current: number = 1;

  constructor(private ressourcesService: RessourcesService, private jeuService: JeuService) { 
    this.jeuService.currentPlayer.subscribe((value) => {
      this.current = value;
    });
  }

  displayRessource(id: number){
    if (this.ressourcesService.getRessourceById(id) != undefined) {
      return this.ressourcesService.getRessourceById(id)?.pictograme;
    } else {
      return undefined;
    }
  }

  patienter() {
    this.jeuService.addNewRessources(2);
    this.jeuService.currentPlayer = this.jeuService.nextCurrentPlayer();
  }

  creer() {
    this.jeuService.addNewRessources();
    this.jeuService.currentPlayer = this.jeuService.nextCurrentPlayer();
  }

  attaquer() {
    this.jeuService.addNewRessources();
    this.jeuService.currentPlayer = this.jeuService.nextCurrentPlayer();
  }

  deplacer() {
    this.jeuService.addNewRessources();
    this.jeuService.currentPlayer = this.jeuService.nextCurrentPlayer();
  }
}
