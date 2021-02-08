import { Canton } from './canton';

export class Joueur {
    id?: number;
    nom?: string;
    titre?: string;
    couleur: string = '4580ff';
    cantons: Array<Canton> = [];
    ressources?:Array<{id: number, quantity: number}>;
    
    constructor(id: number, nom: string, titre: string, couleur: string, canton: Canton){

        this.id = id;
        this.nom = nom;
        this.titre = titre;
        this.couleur = couleur;
        this.cantons.push(canton);

        this.ressources = [
            { id: 1, quantity: 0 },
            { id: 2, quantity: 0 },
            { id: 3, quantity: 0 },
            { id: 4, quantity: 0 },
            { id: 5, quantity: 0 },
            { id: 6, quantity: 0 }
        ];
    }

    getColor() {
        return this.couleur;
    }

    getStartCanton() {
        return this.cantons[0];
    }

    getRessourceById(id: number) {
        return this.ressources?.find(res => res.id === id)?.quantity;
    }

    getCantons() {
        return this.cantons;
    }

}

