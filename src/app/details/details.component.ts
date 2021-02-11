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
  canton?: Canton;
  selectedRessource?: Ressources;
  current: number = 1;

  startMenu: boolean = true;
  createMenu: boolean = false;

  constructor(private ressourcesService: RessourcesService, private jeuService: JeuService) { 
    this.jeuService.currentPlayer.subscribe((value) => {
      this.current = value;
    });

    this.jeuService.selectedCanton.subscribe((value) => {
      this.canton = this.jeuService.getCantonById(value);
    })
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
    this.setStartMenu();
    this.jeuService.currentPlayer = this.jeuService.nextCurrentPlayer();
  }

  creer() {
    this.setCreateMenu();
  }

  attaquer() {
    alert('A l\'attaque');
  }

  deplacer() {
    alert('Déplacement !');
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
  setPuissance(coef: number) : void {
    switch (coef) {
      case 1:
        this.jeuService.removeRessource(1, 5);
        this.jeuService.removeRessource(3, 3);
        this.jeuService.setForce(this.canton!.id!, coef);
        this.jeuService.incActions();
        break;

      case 5:
        this.jeuService.removeRessource(2, 7);
        this.jeuService.removeRessource(4, 3);
        this.jeuService.removeRessource(5, 2);
        this.jeuService.setForce(this.canton!.id!, coef);
        this.jeuService.incActions();
        break;

      case 15:
        this.jeuService.removeRessource(2, 6);
        this.jeuService.removeRessource(4, 5);
        this.jeuService.removeRessource(6, 3);
        this.jeuService.setForce(this.canton!.id!, coef);
        this.jeuService.incActions();
        break;
    }
  }

  canBuy(coef: number) {
    switch (coef) {
      case 1:
        if (
          this.jeuService.joueurs[this.current].getRessourceById(1)! >= 5 &&
          this.jeuService.joueurs[this.current].getRessourceById(3)! >= 3
        ) {
          return true;
        }
        return false;

      case 5:
        if (
          this.jeuService.joueurs[this.current].getRessourceById(2)! >= 4 &&
          this.jeuService.joueurs[this.current].getRessourceById(4)! >= 3 &&
          this.jeuService.joueurs[this.current].getRessourceById(5)! >= 2
        ) {
          return true;
        }
        return false;

      case 15:
        if (
          this.jeuService.joueurs[this.current].getRessourceById(2)! >= 6 &&
          this.jeuService.joueurs[this.current].getRessourceById(4)! >= 5 &&
          this.jeuService.joueurs[this.current].getRessourceById(6)! >= 3
        ) {
          return true;
        }
        return false;

      default:
        return false;
    }
  }
}
