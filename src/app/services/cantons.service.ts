import { Injectable } from '@angular/core';
import { CANTONS76 } from '../mocks/mock-cantons-76';
import { Canton } from '../classes/canton';

@Injectable({
  providedIn: 'root'
})
export class CantonsService {

  constructor() { }

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
}
