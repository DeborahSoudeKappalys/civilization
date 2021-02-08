import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Canton } from '../classes/canton';
import { CantonsService } from '../services/cantons.service';
import { JeuService } from '../jeu.service';
import { Joueur } from '../classes/joueur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-player',
  templateUrl: './init-player.component.html',
  styleUrls: ['./init-player.component.scss']
})
export class InitPlayerComponent {
  nom = new FormControl('');
  titre = new FormControl('');
  couleur: string = "4580ff";
  canton!: Canton;
  cantonId: number = 31;
  numberOfPlayers!: number;
  launched = this.jeuService.getLaunched();
  player1Color?: string;
  player1Canton?: number;

  constructor(private cantonsService: CantonsService, private jeuService: JeuService, private router: Router) { 
    this.jeuService.numberOfPlayers.subscribe((value) => {
      this.numberOfPlayers = value;
    });
  }

  chooseColor(couleur: string){
    this.couleur = couleur;
  }

  chooseCanton(id: number){
    this.cantonId = id;
  }

  setCanton(id: number, idPlayer: number) {
    let cantonFound = this.cantonsService.getCantonById(id);
    if (cantonFound != undefined) {
      cantonFound.proprio = idPlayer;
      this.canton = cantonFound;
    }
  }

  createPlayer() {
    // Assignation Joueur/Canton et Canton/Joueur
    this.setCanton(this.cantonId, this.numberOfPlayers);

    // Création du joueur
    this.jeuService.addPlayer(new Joueur(this.numberOfPlayers, this.nom.value, this.titre.value, this.couleur, this.canton));

    // Empeche le joueur 2 d'utiliser la même couleur et de posséder le même canton
    let p1 = this.jeuService.getPlayer(0);
    if (p1 != undefined) {
      this.player1Color = p1.getColor();
      this.player1Canton = p1.getStartCanton().id;
    }

    // Nettoyage des saisies
    this.nom.setValue('');
    this.titre.setValue('');

    // Lancer le jeu si 2 joueurs sont créés
    if(this.numberOfPlayers === 2) {
      this.jeuService.launch();
      this.launched = this.jeuService.getLaunched();
      this.router.navigateByUrl('/game');
    }
  }

}
