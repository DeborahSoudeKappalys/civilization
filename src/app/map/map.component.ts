import { Component, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';
import panzoom from "panzoom";
import { Canton } from '../classes/canton';
import { CantonsService } from '../services/cantons.service';
import { JeuService } from '../jeu.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  @Input() _currentPlayer: number = 0;
  @Input('currentPlayer')
  set currentPlayer(id: number) {
    if (id !== this._currentPlayer) {
      this._currentPlayer = id;
      this.currentCantons = this.jeuService.getCurrentCantons();
      this.currentColor = this.jeuService.getCurrentColor();
      this.jeuService.setCantonColor();
    }
  }
  
  @ViewChild('scene', { static: false }) scene!: ElementRef;

  currentCantons: Array<string> = [];
  currentColor?: string;
  selectedCanton?: number;

  constructor(private jeuService: JeuService) { 
    this.jeuService.selectedCanton.subscribe((value) => {
      this.selectedCanton = value;
    });
  }

  ngAfterViewInit() {
    // panzoom(document.querySelector('#scene'));
    panzoom(this.scene.nativeElement, {
      transformOrigin: {x: 0.5, y: 0.5},
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
}
