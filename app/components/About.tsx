import Image from "next/image";

import ABOUT_PICTURE from "@/assets/images/about.jpg";

export function About() {
  return (
    <div className="flex flex-wrap flex-col items-center w-full bg-black text-white shadow-xl md:flex-row md:items-stretch">
      <div className="flex flex-col items-center justify-center gap-8 md:w-1/2 text-center p-4">
        <h2 className="text-4xl font-3xl w-full">Qui sommes-nous ?</h2>
        <p className="max-w-[calc(100%-50px)]">
          Nous sommes une famille niçoise qui avons décidé de nous lancer dans l{"'"}aventure des
          Food trucks en 2020.
          <br />
          <br />
          Nous avons choisi de nous spécialiser dans la cuisine niçoise et provençale, en proposant
          des plats traditionnels et des recettes revisitées. Nous avons à cœur de travailler avec
          des produits frais et locaux.
          <br />
          <br />
          Nous vous proposons des plats à emporter ou à déguster sur place, dans un cadre convivial
          et chaleureux.
          <br />
          <br />
          Nous sommes présents sur les marchés de la ville de Nice et de ses alentours, ainsi que
          sur les événements privés.
        </p>
      </div>

      <div className="flex items-center justify-center w-full max-h-[500px] overflow-hidden md:w-1/2 md:max-h-none">
        <Image src={ABOUT_PICTURE} alt="About picture" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
