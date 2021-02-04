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
  cantonId: number = 1;
  numberOfPlayers: number = 1;
  launched = this.jeuService.getLaunched();
  player1Color?: string;
  player1Canton?: number;

  constructor(private cantonsService: CantonsService, private jeuService: JeuService, private router: Router) { }

  ngOnInit(): void {
  }

  setColor(couleur: string){
    this.couleur = couleur;
  }

  setCanton(id: number, idPlayer: number) {
    let cantonFound = this.cantonsService.getCantonById(id);
    if (cantonFound != undefined) {
      cantonFound.proprio = idPlayer;
      this.canton = cantonFound;
    }
  }

  chooseCanton(id: number){
    this.cantonId = id;
  }

  createPlayer() {
    this.setCanton(this.cantonId, (this.numberOfPlayers - 1));
    let player = new Joueur((this.numberOfPlayers - 1), this.nom.value, this.titre.value, this.couleur, this.canton);
    this.jeuService.addPlayer(player);

    let p1 = this.jeuService.getPlayer(0);
    if (p1 != undefined) {
      this.player1Color = p1.getColor();
      this.player1Canton = p1.getStartCanton().id;
    }

    this.nom.setValue('');
    this.titre.setValue('');

    if(this.numberOfPlayers === 2) {
      this.jeuService.launch();
      this.launched = this.jeuService.getLaunched();
      this.router.navigateByUrl('/game');
    } else {
      this.numberOfPlayers++;
    }

  }

}
