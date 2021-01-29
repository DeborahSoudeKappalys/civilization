export class Canton {
    id?: number;
    nom?: string;
    blason?: string;
    description?: string;
    ressources?: Array<{id: number, quantity: number}>;
    proprio: number = 0;
    voisins?: Array<number>;
    puissance?: number;
}

