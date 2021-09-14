export class Canton {
    id: number = 0;
    nom?: string;
    blason?: string;
    description?: string;
    ressources?: Array<{id: number, quantity: number}>;
    proprio: number = 2;
    voisins?: Array<number>;
    puissance?: number;

}
