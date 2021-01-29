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
export class DetailsComponent implements OnInit {

  @Input() canton?: Canton;
  selectedRessource?: Ressources;
  currentPlayer?: number;
  current: number = 1;

  constructor(private ressourcesService: RessourcesService, private jeuService: JeuService) { }

  ngOnInit(): void {
    this.currentPlayer = this.jeuService.getCurrentPlayer();
  }

  displayRessource(id: number){
    if (this.ressourcesService.getRessourceById(id) != undefined) {
      return this.ressourcesService.getRessourceById(id)?.pictograme;
    } else {
      return undefined;
    }
  }

  patienter() {
    this.jeuService.currentPlayer = this.jeuService.nextCurrentPlayer();
    this.jeuService.refreshRessources();
  }

  creer() {
    alert('Nous avons besoin de plus de soldat !');
  }

  attaquer() {
    alert('Attaquer ! Et que ces terres deviennent notres !');
  }

  deplacer() {
    alert('eplace tes troupes');
  }

}
