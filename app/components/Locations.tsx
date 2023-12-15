"use client";

import Image from "next/image";
import { useMemo } from "react";

// Utils
import { LOCATIONS } from "@/utils/locations";

export function Locations() {
  return (
    <article className="flex flex-col gap-4 w-full">
      <h2 className="text-4xl text-white pt-4 ml-4">Nos emplacements</h2>

      <div className="flex flex-wrap flex-col justify-between text-white text-center shadow-xl md:flex-row">
        {LOCATIONS.map((location) => (
          <Location key={location.name} data={location} />
        ))}
      </div>
    </article>
  );
}

function Location({ data }: { data: (typeof LOCATIONS)[0] }) {
  const bg = useMemo(() => {
    switch (data.bg) {
      case "red":
        return "bg-gradient-to-r from-red-500 to-red-700";
      default:
        return "bg-gradient-to-l from-gray-800 to-black";
    }
  }, [data.bg]);

  return (
    <div className={`flex flex-col items-center gap-8 ${bg} text-xl text-center p-4 md:w-1/2`}>
      <h3 className="text-4xl font-semibold">{data.name}</h3>

      <p className="text-xl">{data.description}</p>

      <Image src={data.image.src} alt={data.image.alt} width={250} height={250} />
    </div>
  );
}
