import Image from "next/image";

// Assets
import BANNER_IMAGE from "@/assets/images/banner-image.jpg";

export function Banner() {
  return (
    <div className="relative top-0 flex items-center justify-center w-full h-[75vh] overflow-hidden object-center">
      <Image
        src={BANNER_IMAGE}
        alt="Bannière de Tradilocation"
        className="absolute top-0 left-0 object-cover w-full h-full brightness-50"
      />

      <div className="absolute flex flex-col items-center justify-center gap-4 text-white font-semibold p-2">
        <h1 className="text-4xl text-center sm:text-8xl">Aloura</h1>

        <h2 className="text-lg text-center sm:text-4xl">
          Le Food truck niçois qui vous fait voyager
        </h2>
      </div>
    </div>
  );
}
