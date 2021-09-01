import { Injectable } from '@angular/core';
import { Joueur } from './classes/joueur';
import { CANTONS76 } from './mocks/mock-cantons-76';
import { Canton } from './classes/canton';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JeuService {
  joueurs: Array<Joueur> = [];
  currentPlayer = new BehaviorSubject(1);
  otherPlayer = new BehaviorSubject(0);
  turn = new BehaviorSubject(1);
  numberOfPlayers = new BehaviorSubject(0);
  nbOfActions = new BehaviorSubject(0);
  isWar = new BehaviorSubject(false);
  moving = new BehaviorSubject(false);
  isFinish = new BehaviorSubject(99);

  launched: Boolean = false;
  endRoundJ1: Boolean = false;
  endRoundJ2: Boolean = false;
  canton?: Canton;
  selectedCanton = new BehaviorSubject(0);
  
  finishWar = new BehaviorSubject(0);
  winnerWar: Boolean = false;

  constructor() { 
    this.currentPlayer.next(0);
    this.currentPlayer.next(0);
    this.isFinish.next(99);
    this.turn.next(1);

    this.selectedCanton.next(0);

    this.isWar.next(false);
  }

  // LA GUERRE
  setWar() {
    this.isWar.next(true);
  }

  setPeace() {
    this.isWar.next(false);
  }

  setMoving() {
    this.moving.next(true);
  }

  removeMoving() {
    this.moving.next(false);
  }

  finishGame(id: number) {
    this.isFinish.next(id);
  }

  // REFRESH RESSOURCES APRES ACTION
  incActions() {
    this.nbOfActions.next(this.nbOfActions.value + 1);
  }

  addPlayer(joueur: Joueur){
    this.joueurs.push(joueur);
    this.numberOfPlayers.next(this.numberOfPlayers.value + 1);
  }

  getPlayer(id: number): Joueur {
    if(id === 0){
      return this.joueurs[0];
    } else {
      return this.joueurs[1];
    }
  }

  getPlayers(){
    return this.joueurs;
  }

  getCurrentPlayer() {
    return this.currentPlayer.value;
  }

  setForce(idCanton: number, force: number) {
    this.joueurs[this.currentPlayer.value].getCantonById(idCanton)!.puissance! += force;
  }

  getCurrentCantons() {
    let tab: Array<string> = [];
    if(typeof this.getPlayer(this.getCurrentPlayer()) !== 'undefined') {
      let cantons: Array<Canton> = this.getPlayer(this.getCurrentPlayer()).cantons;
      
      cantons.forEach(canton => {
        if(canton.id != undefined) {
          tab.push('76_' + canton.id);
        }
      });
      return tab;
    }

    return tab;
  }

  getCurrentColor() {
    return this.getPlayer(this.getCurrentPlayer()).couleur;
  }

  nextCurrentPlayer() {
    if (typeof this.joueurs[this.otherPlayer.value] !== 'undefined' && this.joueurs[this.otherPlayer.value].cantons.length === 0) {
      return this.finishGame(this.currentPlayer.value);
    } else {
      if (this.currentPlayer.value === 0) {
        this.currentPlayer.next(1);
        this.otherPlayer.next(0);
      } else {
        this.currentPlayer.next(0);
        this.otherPlayer.next(1);
        this.nextTurn();
      } 
  
      return this.currentPlayer;
    }
  }

  getVoisins(){
    let cantons = this.joueurs[this.currentPlayer.value].getCantons();
    let voisins !: Array<number>;
    cantons.forEach(el => {
      let voisinsCanton = el.voisins;
      if (voisinsCanton != undefined) {
        voisins.concat(voisinsCanton);
      }
    })

    var result = voisins.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })

    return result;
  }

  illuminateVoisins(id:number){
    this.colorizeAllCantons();
    let voisins = this.getCantonById(id)!.voisins;
    
    if (voisins != undefined) {
      voisins.forEach(canton => {
        let element = document.getElementById('76_' + canton);
        
        if (element !== null){
          element.style.fill = '#c89951';
        }
      });
    }
    this.setCantonColor();
  }

  launch(){
    this.launched = true;
  }

  getLaunched() {
    return this.launched;
  }

  nextTurn() {
    this.turn.next(this.turn.value + 1);
  }

  getTurn() {
    return this.turn.value;
  }

  addNewRessources(coef = 0) {
    // Joueur courrant
    let joueur = this.joueurs[this.getCurrentPlayer()];
    
    if ( typeof joueur !== 'undefined') {
      // Pour chaque canton que le joueur possède
            joueur.cantons.forEach(canton => {
              // Si le canton possède des ressources
              if (canton.ressources != undefined) {
                // Pour chaque ressource
                canton.ressources.forEach(ressource => {
                  // On l'assigne à la ressource du joueur
                  joueur.setRessourceById(ressource.id, ressource.quantity);
                });          
              }
            });
    }
  }

  getRessourceValue(idRessource: number) {
    if (typeof this.getPlayers()[this.currentPlayer.value-1] !== 'undefined') {
      return this.getPlayers()[this.currentPlayer.value-1].getRessourceById(idRessource);
    }

    return;
  }

  removeRessource(idRessource: number, quantity: number) {
    this.getPlayers()[this.currentPlayer.value].removeRessourceById(idRessource, quantity);
  }

  getCantonById(id: number): Canton|undefined{
    let cantonIndex: number = -1; 
    CANTONS76.forEach((canton, index) => {
      if (canton.id === id) {
        cantonIndex = index;
      } 
    });

    if (cantonIndex != -1) {
      return CANTONS76[cantonIndex];
    } else {
      return undefined;
    }
  }

  setCantonColor() {
    if(this.finishWar.value == 1) {
      setTimeout(() => { 
        this.finishWar.next(0);
      },3500);
    }

    this.getPlayers().forEach(joueur => {
      joueur.cantons.forEach(canton => {
        let element = document.getElementById('76_' + canton.id);

        if (element !== null){
          element.style.fill = '#' + joueur.couleur;
        }
      });
    });
  }

  colorizeTheNames() {
    let el = document.getElementsByClassName('name') as HTMLCollectionOf<HTMLElement>;
    if (typeof el[0] !== 'undefined' && typeof el[1] !== 'undefined') {
      el[0]!.style.color = '#' + this.joueurs[0].couleur;
      el[1]!.style.color = '#' + this.joueurs[1].couleur;
    }
  }

  colorizeAllCantons() {
    document.querySelector('#g36')?.querySelectorAll('path').forEach(element => {
      element.style.fill = '#d2a96a';
    });
  }

  setSelectedCanton(id: number) {
    this.selectedCanton.next(id);
  }

  resetSelectedCanton() {
    this.selectedCanton.next(99);
  }
}
