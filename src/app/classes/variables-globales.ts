// variablesGlobales.ts
import { Injectable } from '@angular/core';
import { Joueur } from './joueur';
@Injectable()
export class VariablesGlobales {
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
    }
