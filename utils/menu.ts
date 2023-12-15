// Assets
import SOCCA from "../assets/images/menu/socca.webp";
import PISSALADIERE from "../assets/images/menu/pissaladiere.webp";
import FARCIS from "../assets/images/menu/farcis.jpg";
import PANBAGNAT from "../assets/images/menu/pan-bagnat.jpeg";
import BEIGNETS_DE_FLEUR_DE_COURGE from "../assets/images/menu/beignets-de-fleurs-de-courge.jpg";
import SALADE_NICOISE from "../assets/images/menu/salade.jpeg";
import DAUBE from "../assets/images/menu/daube.webp";
import TOURTE from "../assets/images/menu/tourte-aux-blettes.jpg";
import GANSES from "../assets/images/menu/ganses.webp";
import FOUGASSE from "../assets/images/menu/fougasse.webp";

export const MENU = [
  {
    name: "Socca",
    description: `La socca est une galette de pois chiche à l’huile d’olive, tendre et croustillante,
    traditionnellement cuite au feu de bois.`,
    price: 3,
    image: SOCCA,
  },
  {
    name: "Pissaladière",
    description: `La pissaladière est une tarte à base de pâte à pain, garnie d'oignons confits, d’anchois et d'olives noires.`,
    price: 4,
    image: PISSALADIERE,
  },
  {
    name: "Farcis niçois",
    description: `Plat typique du bassin méditerranéen, le petit farci est un légume farci à la viande,
    à la mie de pain et à l'huile d'olive.`,
    price: 6,
    image: FARCIS,
  },
  {
    name: "Pan bagnat",
    description: `Le pan bagnat, typique de Nice, est confectionné avec un pain rond et « baigné » à l’huile d’olives
    (pan bagnat signifie pain mouillé) est garni de thon et de crudités :
    tomates, oeufs, cébette, poivron vert, artichaut, olives, anchois... `,
    price: 7,
    image: PANBAGNAT,
  },
  {
    name: "Beignets de fleurs de courge",
    description: `À Nice, les fleurs de courgettes sont vendues en bouquets sur les marchés.
    On les incorpore ensuite dans une pâte à beignet qu’on fait frire comme des beignets classiques.`,
    price: 5,
    image: BEIGNETS_DE_FLEUR_DE_COURGE,
  },
  {
    name: "Salade niçoise",
    description: `La salade niçoise traditionnelle est composée de laitue, tomates, poivrons, oignons rouge,
    cébettes, févettes, concombres, œufs durs, thon ou anchois, petits artichauts violets, huile d’olive et olives de Nice.`,
    price: 9,
    image: SALADE_NICOISE,
  },
  {
    name: "Daube niçoise",
    description: `La daube niçoise est une spécialité à base de bœuf cuit avec du vin rouge, des tomates, des carottes,
    du lard, des oignons, des cèpes. Elle s’accompagne souvent de raviolis niçois ou de gnocchis, deux autres spécialités
    qu'on retrouve beaucoup à Nice.`,
    price: 12,
    image: DAUBE,
  },
  {
    name: "Tourte aux blettes",
    description: `La tourte se consomme sucrée ou salée. En version sucrée, elle se compose de blettes, pignons et raisins secs
    et est saupoudrée de sucre glace. Version salée, elle est garnie de blettes, de riz, de petit salé et de parmesan.`,
    price: 10,
    image: TOURTE,
  },
  {
    name: "Ganses",
    description: `En forme de losange, ce beignet sucré se prépare traditionnellement pour le carnaval de Nice. Sa recette est simple :
    de la farine, des œufs, du beurre, du sucre, de la levure et un zeste de citron.`,
    price: 5,
    image: GANSES,
  },
  {
    name: "Fougasse",
    description: `La Fougasse est du pain provençal, plat, coupé en quelques branches lors de sa préparation.
    Elle est souvent garnie de produits variés: bacon, anchois ou fromage. Il y a aussi des fougasses sucrées.`,
    price: 5,
    image: FOUGASSE,
  },
];
