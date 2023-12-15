// Assets
import EMPLACEMENT_COURS_SALEYA from "@/assets/images/emplacement-cours-saleya.jpg";
import LOGO_OGCN from "@/assets/images/logo-ogcnice.jpg";

export const LOCATIONS = [
  {
    name: "Cours Saleya",
    description: "Ouvert du lundi au vendredi de 11h à 14h",
    image: { src: EMPLACEMENT_COURS_SALEYA, alt: "Emplacement cours Saleya" },
    bg: "from-red-500 to-red-700",
  },
  {
    name: "Jour de match Allianz Riviera",
    description: "Aloura sera présent pour tous les matchs à domicile de la saison de l'OGC Nice.",
    image: { src: LOGO_OGCN, alt: "Logo OGC Nice" },
    bg: "from-gray-900 to-black",
  },
];
