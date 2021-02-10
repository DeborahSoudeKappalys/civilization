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
  turn = new BehaviorSubject(1);
  numberOfPlayers = new BehaviorSubject(0);
  launched: Boolean = false;
  canton?: Canton;

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
          element.style.fill = '#ac8a56';
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

  colorizeAllCantons() {
    document.querySelector('#g36')?.querySelectorAll('path').forEach(element => {
      element.style.fill = '#c89951';
    });
  }
}
