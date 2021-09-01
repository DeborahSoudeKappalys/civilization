import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import panzoom, { PanZoom } from "panzoom";
import { JeuService } from '../jeu.service';
import { Joueur } from '../classes/joueur';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {  
  @ViewChild('scene', { static: false }) scene!: ElementRef;

  currentPlayer: number = 0;
  currentCantons: Array<string> = [];
  currentColor?: string;
  selectedCanton?: number;
  isFinish: number = 99;
  winner?: Joueur;
  turn?: number;
  nextPlayer: Boolean = false;
  patienter: Boolean = false;
  finishWar?: number;
  winnerWar = this.jeuService.winnerWar;

  panzoom?: PanZoom;

  constructor(private jeuService: JeuService) { 
    this.jeuService.currentPlayer.subscribe((value) => {
      this.currentPlayer = value;
      this.currentCantons = this.jeuService.getCurrentCantons();
      this.currentColor = this.jeuService.getCurrentColor();
      this.jeuService.setCantonColor();

      this.showNextPlayer();
    });

    this.jeuService.selectedCanton.subscribe((value) => {
      this.selectedCanton = value;
    });

    this.jeuService.finishWar.subscribe((value) => {
      this.finishWar = value;
    });

    this.jeuService.isFinish.subscribe((value) => {
      this.isFinish = value;
      this.winner = this.jeuService.getPlayer(this.isFinish);
    });

    this.jeuService.turn.subscribe((value) => {
      this.turn = value;
    });
  }

  ngAfterViewInit() {
    this.panzoom = panzoom(this.scene.nativeElement, {
      minZoom: 1,
      boundsPadding: 1,
      bounds: {
        top: 960,
        right: 0,
        bottom: 0,
        left: 1920,
      }
    });

    this.jeuService.setCantonColor();
  }

  showNextPlayer() {
    this.nextPlayer = true;
    setTimeout(() => { 
      this.nextPlayer = false;

      if(this.currentPlayer == 0 && this.jeuService.endRoundJ1 == true) {
        this.showWaitPopUp();
        this.jeuService.endRoundJ1 = false;
      } else if (this.currentPlayer == 1 && this.jeuService.endRoundJ2 == true) {
        this.showWaitPopUp();
        this.jeuService.endRoundJ2 = false;
      }
    }, 1500);
  }

  showWaitPopUp() {
    this.patienter = true;

    setTimeout(() => { 
      this.patienter = false;
    }, 2500);
  }

  getCurrentPlayer() {
    return this.jeuService.joueurs[this.currentPlayer];
  }

  openCanton(id: number){
    if (this.jeuService.getCantonById(id) != undefined) {
      this.jeuService.setSelectedCanton(id);
    }
    this.jeuService.illuminateVoisins(id);
  }

  closeCanton(){
    this.jeuService.colorizeAllCantons();
    this.jeuService.setCantonColor();
    this.jeuService.resetSelectedCanton();
  }

  getCurrentPlayerRessources() {
    return [
      this.jeuService.joueurs[this.currentPlayer].getRessourceById(1),
      this.jeuService.joueurs[this.currentPlayer].getRessourceById(2),
      this.jeuService.joueurs[this.currentPlayer].getRessourceById(3),
      this.jeuService.joueurs[this.currentPlayer].getRessourceById(4),
      this.jeuService.joueurs[this.currentPlayer].getRessourceById(5),
      this.jeuService.joueurs[this.currentPlayer].getRessourceById(6),
    ]
  }
}
