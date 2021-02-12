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
  other: number = 1;

  startMenu: boolean = true;
  createMenu: boolean = false;

  isWar: boolean = false;
  voisinsEnnemis: Array<Canton> = [];
  target?: Canton;

  constructor(private ressourcesService: RessourcesService, private jeuService: JeuService) { 
    this.jeuService.currentPlayer.subscribe((value) => {
      this.current = value;
    });

    this.jeuService.otherPlayer.subscribe((value) => {
      this.other = value;
    });

    this.jeuService.selectedCanton.subscribe((value) => {
      this.canton = this.jeuService.getCantonById(value);
    })

    this.jeuService.isWar.subscribe((value) => {
      this.isWar = value;

      if (value) {
        this.prepareWar();
      }
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
    this.jeuService.addNewRessources();
    this.setStartMenu();
    this.jeuService.nextCurrentPlayer();

    this.jeuService.colorizeAllCantons();
    this.jeuService.setCantonColor();
    this.jeuService.resetSelectedCanton();
  }

  creer() {
    this.setCreateMenu();
  }

  attaquer() {
    this.jeuService.setWar();
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

  // ACTION ATTAQUER
  prepareWar() {
    this.voisinsEnnemis = [];
    let voisins = this.canton!.voisins;
    if (voisins != undefined) {
      voisins.forEach((id) => {
        let voisin = this.jeuService.getCantonById(id);

        if (voisin != undefined && voisin.proprio != this.jeuService.getCurrentPlayer()) {
          this.voisinsEnnemis.push(voisin!);
        }
      });
    }
  }

  fermer() {
    this.jeuService.setPeace();
    this.voisinsEnnemis = [];
  }

  setTarget(id: number) {
    this.target = this.jeuService.getCantonById(id);
  }

  simuAttaque() {
    // Initialisation Attaquant
    let p1 = this.canton!.puissance!;
    let p1min = Math.round(p1 / 1.5);
    let p1max = Math.round(p1 * 1.5) + 1;
    let pf1 = Math.round(Math.random() * (p1max - p1min) + p1min);

    // Initialisation Cible
    let p2 = this.target!.puissance!;
    let p2min = Math.round(p2 / 1.5);
    let p2max = Math.round(p2 * 1.5);
    let pf2 = Math.round(Math.random() * (p2max - p2min) + p2min);

    // Calcul de la différence
    let pfres = pf1 - pf2;

    // Si l'attaquant a gagné
    if (pfres > 1) {
      // La puissance de canton passe à 1 (garnison) et le reste de la puissance avance
      this.canton!.puissance = 1;

      // Si la puissance calculée est supérieur à la puissance nominale, on prend la puissance nominale 
      if (pf1 > p1) {
        this.target!.puissance = p1 - pf2 - 1;
      } else {
        this.target!.puissance = pfres - 1;
      }

      // Si la valeur de puissance est inférieur à 1
      if (this.target!.puissance < 1) {
        this.target!.puissance = 1;
      }

      // Changement du propriétaire
      this.target!.proprio = this.jeuService.getCurrentPlayer();

      // On ajoute le canton au gagnant
      this.jeuService.joueurs[this.jeuService.currentPlayer.value].addCanton(this.jeuService.getCantonById(this.target!.id!)!);

      // On le supprime du perdant
      this.jeuService.joueurs[this.jeuService.otherPlayer.value].removeCanton(this.target!.id!);

      // S'il y a un échec de l'attaque
    } else {
      this.canton!.puissance = 1;
      this.target!.puissance = 1;
    }

    this.jeuService.setCantonColor();
    this.target = undefined;
    this.jeuService.setPeace();
  }
}
