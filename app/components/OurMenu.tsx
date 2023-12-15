// Utils
import { MENU } from "@/utils/menu";
import Image from "next/image";

export function OurMenu() {
  return (
    <div className="flex flex-col gap-4 bg-gradient-to-tr from-gray-700 to-black text-white p-4">
      <h2 className="text-white text-4xl font-3xl">Notre menu</h2>

      <ul className="flex flex-wrap justify-center gap-4">
        {MENU.map((item) => (
          <Plate key={item.name} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Plate({ item }: { item: any }) {
  return (
    <li className="w-[200px] bg-gradient-to-tl from-red-500 to-red-700 rounded-md overflow-hidden">
      <Image
        src={item.image}
        alt={item.name}
        width={200}
        height={200}
        className="aspect-square object-cover w-full"
      />

      <div className="text-xl text-center py-4 px-2">
        <h3>
          {item.name} - {item.price}€
        </h3>
      </div>
    </li>
  );
}
