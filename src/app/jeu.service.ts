import { Injectable } from '@angular/core';
import { Joueur } from './classes/joueur';
import { element } from 'protractor';
import { Canton } from './classes/canton';

@Injectable({
  providedIn: 'root'
})
export class JeuService {
  joueurs: Array<Joueur> = [];
  launched: Boolean = false;
  currentPlayer: number = 1;
  turn: number = 1;

    // Ressources
    corn?: number;
    coin?: number;
    wood?: number;
    stone?: number;
    fish?: number;
    silk?: number;

  constructor() { }

  addPlayer(joueur: Joueur){
    this.joueurs.push(joueur);
  }

  getPlayer(id: number): Joueur {
    if(this.joueurs[0].id === id){
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
    return this.currentPlayer;
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
    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
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
    this.turn++;
    this.refreshRessources();
  }

  getTurn() {
    return this.turn;
  }

  refreshRessources() {
    this.getPlayers().forEach(joueur => {
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
      })
    });
  }

  nextPlayer() {
    this.currentPlayer = this.nextCurrentPlayer();
    this.refresh();
  }

  getRessourceValue(idRessource: number) {
    return this.getPlayers()[this.currentPlayer-1].getRessourceById(idRessource);
  }

  refresh() {
    this.corn = this.getRessourceValue(1);
    this.coin = this.getRessourceValue(2);
    this.wood = this.getRessourceValue(3);
    this.stone = this.getRessourceValue(4);
    this.fish = this.getRessourceValue(5);
    this.silk = this.getRessourceValue(6);

    this.turn = this.getTurn();
  }
}
