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
    let cantonFound = this.jeuService.getCantonById(id);
    if (cantonFound != undefined) {
      cantonFound.proprio = idPlayer;
      this.canton = cantonFound;
    }
  }

  createPlayer() {
    const axios = require('axios');
    const api = axios.create({
      baseURL: "http://127.0.0.1:8000",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    let params = new URLSearchParams();
    params.append('name', this.nom.value);
    params.append('title', this.titre.value);
    params.append('color', this.couleur);
    params.append('county', this.cantonId.toString());

    api.post('/players', params)
    .then(function (response: any) {
      console.log(response);
      let { data } = response;
      data.forEach((item: string) => {
        console.log(item);
      });
    })
    .catch(function (error: any) {
      console.log(error.message);
    });

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

    // Préselectionne Couleur et Canton pour le joueur 2
    if (this.player1Color != '4580ff' && this.player1Canton != 31 ) {
      this.couleur = '4580ff';
      this.cantonId = 31;
    } else {
      this.couleur = 'cc2e2e';
      this.cantonId = 10;
    }

    // Lancer le jeu si 2 joueurs sont créés
    if(this.numberOfPlayers === 2) {
      this.jeuService.launch();
      this.launched = this.jeuService.getLaunched();
      this.router.navigateByUrl('/game');
    }
  }

}
