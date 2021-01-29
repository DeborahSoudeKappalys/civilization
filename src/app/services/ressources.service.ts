import { Injectable } from '@angular/core';
import { RESSOURCES } from '../mocks/mock-ressources';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {

  constructor() { }

  getRessourceById(id: number){
    let ressourceIndex: number = -1; 
    RESSOURCES.forEach((ressource, index) => {
      if (ressource.id === id) {
        ressourceIndex = index;
      } 
    });

    if (ressourceIndex != -1) {
      return RESSOURCES[ressourceIndex];
    } else {
      return undefined;
    }
  }
}
