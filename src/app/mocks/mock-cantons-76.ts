import {Canton} from '../classes/canton';

export const CANTONS76: Array<Canton> = [
    {
        id: 1,
        nom: "Barentin",
        blason: "https://upload.wikimedia.org/wikipedia/commons/4/42/Blason_Barentin.svg?uselang=fr",
        description: `
Situé dans la vallée de la seine, Barentin est un canton en plein essor. Au coeur de la verdoyante Austreberthe, ses ressources naturelles font d'elle un grand point stratégique.
        `,
        ressources: [
            {
                id: 2,
                quantity: 2,
            },
            {
                id: 3,
                quantity: 3,
            },
            {
                id: 4,
                quantity: 4,
            }
        ],
        proprio: 99,
        voisins: [25, 24, 4],
        puissance: 1,
    },
    {
        id: 2,
        nom: "Bois-Guillaume",
        blason: "https://upload.wikimedia.org/wikipedia/commons/7/78/Blason_ville_fr_Bois-Guillaume_%28Seine-Maritime%29.svg",
        description: "Dès l'antiquité, Bois-guillaume jouissait de ressources simples mais en abondances. Situé sur deux axes stratégiques, il mène facilement à Dieppe et Amiens (Oise)",
        ressources: [
            {
                id: 1,
                quantity: 4,
            },
            {
                id: 3,
                quantity: 5,
            }
        ],
        proprio: 99,
        voisins: [20, 23, 21, 6, 24, 22, 29, 35],
        puissance: 1,
    },
    {
        id: 3,
        nom: "Bolbec",
        blason: "https://upload.wikimedia.org/wikipedia/commons/2/22/Blason_ville_fr_Bolbec_%28Seine-Maritime%29.svg",
        description: `
Canton aussi vieux que la capitale départementale Rouen, Bolbec se distingue par ses nombreux moulins qui jalonnaient la rivière du même nom.
        `,
        ressources: [
            {
                id: 1,
                quantity: 3,
            },
            {
                id: 4,
                quantity: 1,
            },
            {
                id: 5,
                quantity: 3,
            }
        ],
        proprio: 99,
        voisins: [32, 33, 25],
        puissance: 1,
    },
    {
        id: 4,
        nom: "Canteleu",
        blason: "https://upload.wikimedia.org/wikipedia/commons/5/56/Blason_Canteleu.svg",
        description: `
Défriché de toutes natures par les religieux passés, Canteleu sert à présent de refuges grâces à ses falaises creuses situées aux bords de la Seine.
        `,
        ressources: [
            {
                id: 1,
                quantity: 1,
            },
            {
                id: 5,
                quantity: 1,
            }
        ],
        proprio: 99,
        voisins: [1, 24, 22, 28, 13, 9],
        puissance: 1,
    },
    {
        id: 5,
        nom: "Caudebec-lès-Elbeuf",
        blason: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Blason_Caudebec-l%C3%A8s-Elbeuf.svg",
        description: "Grâce à son placement entre Rouen et Paris, le canton de Caudebec-lès-Elbeuf permet des déplacements rapides entre grandes villes.",
        ressources: [
            {
                id: 2,
                quantity: 2,
            },
            {
                id: 6,
                quantity: 1,
            }
        ],
        proprio: 99,
        voisins: [9, 31, 6],
        puissance: 1,
    },
    {
        id: 6,
        nom: "Darnetal",
        blason: "https://upload.wikimedia.org/wikipedia/commons/1/16/Blason_Darn%C3%A9tal.svg",
        description: `
Ce jeune canton naquit sur les bords du Robec, le berceau de Rouen. Son point fort ne réside pas sur ses ressources mais bien sur sa proximité avec la capitale départementale.
        `,
        ressources: [
            {
                id: 1,
                quantity: 2,
            },
            {
                id: 5,
                quantity: 1,
            }
        ],
        proprio: 99,
        voisins: [21, 2, 29, 30, 27, 31, 5],
        puissance: 1,
    },
    {
        id: 7,
        nom: "Dieppe-1",
        blason: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Blason_Dieppe.svg",
        description: `
De la Cité de Limes romaine au fief de Caude Côte lors de la révolution française, Dieppe est riche de par son histoire mais aussi de par ses trésors.
        `,
        ressources: [ 
            {
                id: 2,
                quantity: 3,
            },
            {
                id: 4,
                quantity: 2,
            },
            {
                id: 6,
                quantity: 1,
            },
        ],
        proprio: 99,
        voisins: [8, 33, 20],
        puissance: 2,
    },
    {
        id: 8,
        nom: "Dieppe-2",
        blason: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Blason_Dieppe.svg",
        description: `
De la Cité de Limes romaine au fief de Caude Côte lors de la révolution française, Dieppe est riche de par son histoire mais aussi de par ses trésors.
        `,
        ressources: [
            {
                id: 2,
                quantity: 3,
            },
            {
                id: 4,
                quantity: 2,
            },
            {
                id: 6,
                quantity: 1,
            },
        ],
        proprio: 99,
        voisins: [7, 20, 23, 10],
        puissance: 1,
    },
    {
        id: 9,
        nom: "Elbeuf",
        blason: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Blason_ville_fr_Elbeuf_%28Seine-Maritime%29.svg",
        description: `
L'industrie drapière a marqué l'histoire de ce Canton. Avec le temps, il a sû se réinventer en travaillant des matériaux nouveaux et compétitifs.
        `,
        ressources: [
            {
                id: 2,
                quantity: 2,
            },
            {
                id: 5,
                quantity: 1,
            }
        ],
        proprio: 99,
        voisins: [4, 13, 31, 5],
        puissance: 1,
    },
    {
        id: 10,
        nom: "Eu",
        blason: "https://upload.wikimedia.org/wikipedia/commons/4/43/Blason_ville_fr_Eu_%28Seine-Maritime%29.svg",
        description: `
Eu fût créée par Richard, petit fils de Rolon, dans le but de protéger la Normandie. Ses ressources naturelles lui permettent de se développer facilement.
        `,
        ressources: [
            {
                id: 1,
                quantity: 2,
            },
            {
                id: 4,
                quantity: 1,
            }
        ],
        proprio: 99,
        voisins: [8, 23, 12],
        puissance: 1,
    },
    {
        id: 11,
        nom: "Fécamp",
        blason: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Blason_F%C3%A9camp.svg",
        description: `
Ville d'art et d'histoire, Fécamp et son canton sont situés sur les côtés de la Manche. Riche de ses terres et de la mer, Fécamp prolifère à travers les âges.
        `,
        ressources: [
            {
                id: 2,
                quantity: 3,
            },
            {
                id: 4,
                quantity: 2,
            },
            {
                id: 6,
                quantity: 1,
            },
        ],
        proprio: 99,
        voisins: [26, 32, 33],
        puissance: 2,
    },
    {
        id: 12,
        nom: "Gournay-en-Bray",
        blason: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Blason_Gournay-en-bray.svg",
        description: `
Gournay-en-Bray, canton frontière des anciens rois de France, son environnement boisé offrait une ligne de défense naturelle.
        `,
        ressources: [
            {
                id: 2,
                quantity: 2,
            },
            {
                id: 3,
                quantity: 3,
            }
        ],
        proprio: 99,
        voisins: [21, 23, 10],
        puissance: 1,
    },
    {
        id: 13,
        nom: "Le Grand-Quevilly",
        blason: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Blason_ville_fr_Le_Grand-Quevilly_%28Seine-Maritime%29.svg",
        description: `
Ce petit canton proche de la capitale départementale, offre des solutions logistiques intéressantes.
        `,
        ressources: [
            {
                id: 2,
                quantity: 1,
            },
            {
                id: 3,
                quantity: 2,
            }
        ],
        proprio: 99,
        voisins: [4, 28, 27, 31, 9],
        puissance: 1,
    },
    {
        id: 14,
        nom: "Canton du Havre-1",
        blason: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Blason_ville_fr_Le_Havre_%28Seine-Maritime%29.svg",
        description: `
Le Havre premier du nom, baptisé par Napoléon Bonaparte, possède le meilleur emplacement géographique, lui accordant protection et ressource.
        `,
        ressources: [
            {
                id: 2,
                quantity: 2,
            },
            {
                id: 4,
                quantity: 2,
            },
            {
                id: 6,
                quantity: 1,
            },
        ],
        proprio: 99,
        voisins: [26, 17, 18, 19],
        puissance: 2,
    },
    {
        id: 15,
        nom: "Canton du Havre-2",
        blason: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Blason_ville_fr_Le_Havre_%28Seine-Maritime%29.svg",
        description: `
Le Havre second du nom, est l'avant-garde de la cité. Davantage ancrée dans les terres, elle sert de bastion pour la garnison.
        `,
        ressources: [
            {
                id: 2,
                quantity: 3,
            },
            {
                id: 6,
                quantity: 1,
            },
        ],
        proprio: 99,
        voisins: [26, 16, 17],
        puissance: 1,
    },
    {
        id: 16,
        nom: "Canton du Havre-3",
        blason: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Blason_ville_fr_Le_Havre_%28Seine-Maritime%29.svg",
        description: `
Le Havre troisième du nom, contrôle aisément les entrées maritimes avec une vue parfaite sur l'embouchure de la seine.
        `,
        ressources: [
            {
                id: 2,
                quantity: 4,
            },
        ],
        proprio: 99,
        voisins: [26, 32, 17, 18, 19],
        puissance: 1,
    },
    {
        id: 17,
        nom: "Canton du Havre-4",
        blason: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Blason_ville_fr_Le_Havre_%28Seine-Maritime%29.svg",
        description: `
Le Havre quatrième du nom, petite enclave de la cité, est le point névralgique de la pointe de la seine maritime. Luxe et puissance y réside.
        `,
        ressources: [
            {
                id: 4,
                quantity: 1,
            },
            {
                id: 6,
                quantity: 2,
            },
        ],
        proprio: 99,
        voisins: [15, 16, 14, 17],
        puissance: 1,
    },
    {
        id: 18,
        nom: "Canton du Havre-5",
        blason: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Blason_ville_fr_Le_Havre_%28Seine-Maritime%29.svg",
        description: `
Le Havre cinquième du nom, voisine du centre, elle baigne dans la lumière depuis sa création.
        `,
        ressources: [
            {
                id: 6,
                quantity: 2,
            },
        ],
        proprio: 99,
        voisins: [14, 17, 16, 19],
        puissance: 1,
    },
    {
        id: 19,
        nom: "Canton du Havre-6",
        blason: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Blason_ville_fr_Le_Havre_%28Seine-Maritime%29.svg",
        description: `
Le Havre sixième du nom, est la définition parfaite de son nom. Si Napoléon l'a nommée le "Havre de paix", c'est bien pour sa côte et son accès à la mer.
        `,
        ressources: [
            {
                id: 2,
                quantity: 3,
            },
        ],
        proprio: 99,
        voisins: [14, 18, 16],
        puissance: 1,
    },
    {
        id: 20,
        nom: "Luneray",
        blason: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Blason_Luneray.svg/1200px-Blason_Luneray.svg.png",
        description: `
Ancienne cité, Luneray, connue auparavant sous le nom de Luneraco, prospère de ses terres fertiles.
        `,
        ressources: [
            {
                id: 1,
                quantity: 4,
            },
            {
                id: 4,
                quantity: 1,
            }
        ],
        proprio: 99,
        voisins: [7, 8, 23, 2, 24, 35, 33],
        puissance: 1,
    },
    {
        id: 21,
        nom: "Le Mesnil-Esnard",
        blason: "",
        description: `
Le Mesnil-Esnard a longtemps été dirigé par l'Eglise. C'est aujourd'hui ses richesses agricoles qui font d'elle un puissant canton idéalement placé.
        `,
        ressources: [
            {
                id: 1,
                quantity: 6,
            }
        ],
        proprio: 99,
        voisins: [12, 23, 2, 6],
        puissance: 1,
    },
    {
        id: 22,
        nom: "Mont-Saint-Aignan",
        blason: "https://upload.wikimedia.org/wikipedia/commons/4/43/Blason_ville_fr_Mont-Saint-Aignan_%28Seine-Maritime%29.svg",
        description: `
Depuis l'antiquité, Mont-Saint-Aignan est le berceau d'une culture agricole. De plus, au fil des siècles, elle a sû s'adapté à ses époques et évoluer technologiquement.
        `,
        ressources: [
            {
                id: 1,
                quantity: 2,
            },
            {
                id: 4,
                quantity: 1,
            },
            {
                id: 6,
                quantity: 1,
            },
        ],
        proprio: 99,
        voisins: [4, 24, 2, 28],
        puissance: 1,
    },
    {
        id: 23,
        nom: "Neufchâtel-en-Bray",
        blason: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Blason_Neufch%C3%A2tel-en-Bray.svg",
        description: `
Réputé pour sa gastronomie et ses paysages valonnés, Neufchâtel-en-Bray offre un gigantesque territoire riche.
        `,
        ressources: [
            {
                id: 1,
                quantity: 6,
            },
            {
                id: 3,
                quantity: 4,
            }
        ],
        proprio: 99,
        voisins: [10, 12, 21, 2, 20, 8],
        puissance: 1,
    },
    {
        id: 24,
        nom: "Notre-Dame-de-Bondeville",
        blason: "https://upload.wikimedia.org/wikipedia/commons/0/09/Blason_Notre-Dame-de-Bondeville.svg",
        description: `
Territoire écrasé par ses voisons, Notre-Dame-de-Bondeville est tout de même un point central du département, offrant ressources et accessibilité.
        `,
        ressources: [
            {
                id: 1,
                quantity: 4,
            },
            {
                id: 4,
                quantity: 1,
            },
            {
                id: 5,
                quantity: 2,
            },
        ],
        proprio: 99,
        voisins: [35, 2, 22, 4, 1, 25],
        puissance: 1,
    },
    {
        id: 25,
        nom: "Notre-Dame-de-Gravenchon",
        blason: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Blason_Notre_Dame_de_Gravenchon.svg",
        description: `
Bordant la Seine, Notre-Dame-de-Gravenchon s'est démarqué des autres de par sa simplicité. "La simplicité est la réussite absolue".
        `,
        ressources: [
            {
                id: 2,
                quantity: 2,
            },
            {
                id: 3,
                quantity: 3,
            }
        ],
        proprio: 99,
        voisins: [3, 33, 35, 24, 1],
    },
    {
        id: 26,
        nom: "Octeville-sur-Mer",
        blason: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Blason_Octeville-sur-Mer.svg",
        description: `
Pour protéger la grande ville qu'est Le Havre, Octeville-sur-Mer est un autre grand canton servant d'avant garde.
        `,
        ressources: [
            {
                id: 1,
                quantity: 3,
            }
        ],
        proprio: 99,
        voisins: [11, 32, 16, 15, 14],
        puissance: 1,
    },
    {
        id: 27,
        nom: "Le Petit-Quevilly",
        blason: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Blason_ville_fr_Le_Grand-Quevilly_%28Seine-Maritime%29.svg",
        description: `
Ce minuscule canton, possède une variété de ressources importante. Un allié très intéressant, surtout par rapport à sa disposition géographique.
        `,
        ressources: [
            {
                id: 2,
                quantity: 1,
            },
            {
                id: 3,
                quantity: 2,
            },
            {
                id: 6,
                quantity: 1,
            },
        ],
        proprio: 99,
        voisins: [28, 30, 6, 31, 13],
        puissance: 1,
    },
    {
        id: 28,
        nom: "Rouen-1",
        blason: "https://upload.wikimedia.org/wikipedia/commons/0/03/Blason_Rouen_76.svg",
        description: `
Rouen, ville aux cent clochets et capitale de la Seine-Maritime, elle est le symbole de la puissance, et est l'image d'une cité médiévale imposante.
        `,
        ressources: [
            {
                id: 2,
                quantity: 3,
            },
            {
                id: 5,
                quantity: 3,
            },
            {
                id: 6,
                quantity: 2,
            },
        ],
        proprio: 99,
        voisins: [4, 22, 29, 30, 27, 13],
        puissance: 3,
    },
    {
        id: 29,
        nom: "Rouen-2",
        blason: "https://upload.wikimedia.org/wikipedia/commons/0/03/Blason_Rouen_76.svg",
        description: `
Rouen deuxième du nom, se rapproche de ses voisins travaillant la terre. Un aubène pour la capitale.
        `,
        ressources: [
            {
                id: 1,
                quantity: 4,
            },
            {
                id: 5,
                quantity: 2,
            },
            {
                id: 6,
                quantity: 1,
            },
        ],
        proprio: 99,
        voisins: [2, 6, 30, 28],
        puissance: 1,
    },
    {
        id: 30,
        nom: "Rouen-3",
        blason: "https://upload.wikimedia.org/wikipedia/commons/0/03/Blason_Rouen_76.svg",
        description: `
Rouen troisième du nom, borde la Seine. La capitale accède au commerce maritime et ainsi aux ressources de luxe.
        `,
        ressources: [
            {
                id: 2,
                quantity: 4,
            },
            {
                id: 5,
                quantity: 1,
            },
            {
                id: 6,
                quantity: 2,
            },
        ],
        proprio: 99,
        voisins: [28, 29, 6, 27],
        puissance: 1,
    },
    {
        id: 31,
        nom: "Saint-Étienne-du-Rouvray",
        blason: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Blason_Saint-%C3%A9tienne-du-Rouvray.svg",
        description: `
Canton situé au sud du département, permet un saut rapide vers son voisin l'Eure, ses ressources ne sont pas les plus imposantes, mais a sû se faire des alliés proches pour contrer ses lacunes.
        `,
        ressources: [
            {
                id: 1,
                quantity: 2,
            },
            {
                id: 3,
                quantity: 1,
            }
        ],
        proprio: 99,
        voisins: [13, 27, 6, 5, 9],
        puissance: 1,
    },
    {
        id: 32,
        nom: "Saint-Romain-de-Colbosc",
        blason: "https://upload.wikimedia.org/wikipedia/commons/6/64/Blason_ville_fr_Saint-Romain-de-Colbosc_%28Seine-Maritime%29.svg",
        description: `
Saint-Romain-de-Colbosc, le Grand Est du Havre, n'offre que peu de ressource mais une imposante superficie permettant à la ville Napoléonienne de coloniser rapidement le voisinage.
        `,
        ressources: [
            {
                id: 1,
                quantity: 2,
            },
            {
                id: 3,
                quantity: 1,
            }
        ],
        proprio: 99,
        voisins: [16, 26, 11, 33, 3],
        puissance: 1,
    },
    {
        id: 33,
        nom: "Saint-Valery-en-Caux",
        blason: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Blason_ville_fr_Saint-Valery-en-Caux_%28Seine-Maritime%29.svg",
        description: `
Il est l'un des plus grand canton de son département, possède un accès à la mer et est situé entre deux puissances. Saint-Valéry-en-Caux est l'allié parfait.
        `,
        ressources: [
            {
                id: 2,
                quantity: 3,
            },
            {
                id: 3,
                quantity: 2,
            }
        ],
        proprio: 99,
        voisins: [11, 7, 20, 35, 25, 3, 32],
        puissance: 1,
    },
    {
        id: 34,
        nom: "Sotteville-lès-Rouen",
        blason: "https://upload.wikimedia.org/wikipedia/commons/9/91/Blason_Sotteville-l%C3%A8s-Rouen.svg",
        description: `
Sotteville-lès-Rouen, petit Canton au sud de la capitale, a marqué l'histoire de la région grâce à son développement fulgurant de l'industrie textile.
        `,
        ressources: [
            {
                id: 4,
                quantity: 2,
            }
        ],
        proprio: 99,
        voisins: [6, 13, 27, 30, 31],
        puissance: 1,
    },
    {
        id: 35,
        nom: "Yvetot",
        blason: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Blason_ville_fr_Yvetot_%28Seine-Maritime%29.svg",
        description: `
Yvetot, centre de la Seine-Maritime, est riche, très riche, grâce à son placement entre toutes les puissances. Ses accès sont directs la place comme bastion de haute importance.
        `,
        ressources: [
            {
                id: 5,
                quantity: 2,
            },
            {
                id: 6,
                quantity: 2,
            }
        ],
        proprio: 99,
        voisins: [33, 20, 2, 24, 25],
        puissance: 2,
    },
]