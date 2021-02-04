import { Injectable } from '@angular/core';
import { Joueur } from './classes/joueur';
import { Canton } from './classes/canton';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JeuService {
  joueurs: Array<Joueur> = [];
  currentPlayer = new BehaviorSubject(1);
  turn = new BehaviorSubject(1);
  launched: Boolean = false;

  // Ressources
  corn?: number;
  coin?: number;
  wood?: number;
  stone?: number;
  fish?: number;
  silk?: number;

  constructor() { 
    this.currentPlayer.next(0);
    this.turn.next(1);
  }

  addPlayer(joueur: Joueur){
    this.joueurs.push(joueur);
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

  getNumberOfPlayer(){
    return this.joueurs.length;
  }

  getCurrentPlayer() {
    return this.currentPlayer.value;
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
    if (this.currentPlayer.value === 0) {
      this.currentPlayer.next(1);
    } else {
      this.currentPlayer.next(0);
      this.nextTurn();
    } 

    return this.currentPlayer;
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

  addNewRessources() {
    let joueur = this.joueurs[this.getCurrentPlayer()];
    
    joueur.cantons.forEach(canton => {
      let ressourcesJoueur = joueur.ressources;
      let ressourcesCanton = canton.ressources;

      if (ressourcesCanton != undefined) {
        ressourcesCanton.forEach(ressource => {
          ressource.id;

          ressourcesJoueur?.forEach(ressourceJ => {
            if (ressourceJ.id === ressource.id){
              ressourceJ.quantity += ressource.quantity;
            }
          })
        });          
      }
    });
  }

  nextPlayer() {
    this.currentPlayer = this.nextCurrentPlayer();
    this.refresh();
  }

  getRessourceValue(idRessource: number) {
    return this.getPlayers()[this.currentPlayer.value-1].getRessourceById(idRessource);
  }

  refresh() {
    this.corn = this.getRessourceValue(1);
    this.coin = this.getRessourceValue(2);
    this.wood = this.getRessourceValue(3);
    this.stone = this.getRessourceValue(4);
    this.fish = this.getRessourceValue(5);
    this.silk = this.getRessourceValue(6);
  }
}
