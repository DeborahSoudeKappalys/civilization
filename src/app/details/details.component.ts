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

  startMenu: boolean = true;
  createMenu: boolean = false;

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
    this.setCreateMenu();
  }

  attaquer() {
    this.jeuService.addNewRessources();
    this.jeuService.currentPlayer = this.jeuService.nextCurrentPlayer();
  }

  deplacer() {
    this.jeuService.addNewRessources();
    this.jeuService.currentPlayer = this.jeuService.nextCurrentPlayer();
  }

  // LES MENUS ACTIONS
  setStartMenu() {
    this.startMenu = true;
    this.createMenu = false;
  }

  setCreateMenu() {
    this.startMenu = false;
    this.createMenu = true;
  }

  // ACTIONS CREATE
  setPuissance(coef = 1) {
    alert(coef);
  }

  canBuy(coef: number) {
    switch (coef) {
      case 1:
        if (
          this.jeuService.joueurs[this.current].getRessourceById(1) === 5 &&
          this.jeuService.joueurs[this.current].getRessourceById(3) === 3
        ) {
          alert(1);
          return true;
        }
        return false;

      case 5:
        if (
          this.jeuService.joueurs[this.current].getRessourceById(2) === 4 &&
          this.jeuService.joueurs[this.current].getRessourceById(4) === 3 &&
          this.jeuService.joueurs[this.current].getRessourceById(5) === 2
        ) {
          return true;
        }
        return false;

      case 15:
        if (
          this.jeuService.joueurs[this.current].getRessourceById(2) === 6 &&
          this.jeuService.joueurs[this.current].getRessourceById(4) === 5 &&
          this.jeuService.joueurs[this.current].getRessourceById(6) === 3
        ) {
          return true;
        }
        return false;

      default:
        return false;
    }
  }
}
