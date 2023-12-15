import Image from "next/image";

// Utils
import { MENU } from "@/utils/menu";

export function OurMenu() {
  return (
    <div className="flex flex-col gap-4 bg-gradient-to-tr from-gray-700 to-black text-white p-4">
      <h2 className="text-white text-4xl font-3xl text-center">Notre menu</h2>

      <ul className="flex flex-wrap justify-center gap-4">
        {MENU.map((item) => (
          <Plate key={item.name} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Plate({ item }: { item: (typeof MENU)[0] }) {
  return (
    <li className="group w-[200px] bg-gradient-to-tl from-red-500 to-red-700 rounded-md overflow-hidden">
      <div className="relative">
        <Image
          src={item.image}
          alt={item.name}
          width={200}
          height={200}
          className="aspect-square object-cover w-full duration-300 group-hover:brightness-50"
        />
        <p
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center
        opacity-0 w-full h-full text-xs font-semibold bg-[rgba(0,0,0,0.5)] text-center p-2 duration-300 group-hover:opacity-100"
        >
          {item.description}
        </p>
      </div>

      <div className="text-xl text-center py-4 px-2">
        <h3>
          {item.name} - {item.price}€
        </h3>
      </div>
    </li>
  );
}
