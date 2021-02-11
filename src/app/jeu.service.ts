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
  isFinish = new BehaviorSubject(false);

  launched: Boolean = false;
  canton?: Canton;
  selectedCanton = new BehaviorSubject(0);


  constructor() { 
    this.currentPlayer.next(0);
    this.currentPlayer.next(0);
    this.isFinish.next(false);
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

  finishGame() {
    this.isFinish.next(true);
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
    let cantons: Array<Canton> = this.getPlayer(this.getCurrentPlayer()).cantons;
    let tab: Array<string> = [];
    
    cantons.forEach(canton => {
      if(canton.id != undefined) {
        tab.push('76_' + canton.id);
      }
    });
    return tab;
  }


  getCurrentColor() {
    return this.getPlayer(this.getCurrentPlayer()).couleur;
  }

  nextCurrentPlayer() {
    if (this.joueurs[this.otherPlayer.value].cantons.length === 0) {
      return this.finishGame();
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
    let joueur = this.joueurs[this.getCurrentPlayer()];
    
    joueur.cantons.forEach(canton => {
      let ressourcesJoueur = joueur.ressources;
      let ressourcesCanton = canton.ressources;

      if (ressourcesCanton != undefined) {
        ressourcesCanton.forEach(ressource => {
          ressource.id;

          ressourcesJoueur?.forEach(ressourceJ => {
            if (ressourceJ.id === ressource.id){
              ressourceJ.quantity += (ressource.quantity + coef);
            }
          })
        });          
      }
    });
  }

  getRessourceValue(idRessource: number) {
    return this.getPlayers()[this.currentPlayer.value-1].getRessourceById(idRessource);
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
    el[0]!.style.color = '#' + this.joueurs[0].couleur;
    el[1]!.style.color = '#' + this.joueurs[1].couleur;
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
