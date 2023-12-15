import Link from "next/link";
import Image from "next/image";

// Assets
import LOGO from "@/assets/images/logo.png";

// Commons
import { ROUTES } from "@/commons/commons";

export function HamburgerMenu({
  isMenuOpen,
  handler,
}: {
  isMenuOpen: boolean;
  handler: () => void;
}) {
  return (
    <nav
      className={`z-40 fixed top-0 right-0 ${
        isMenuOpen ? "" : "-translate-y-full"
      } left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 w-full bg-black p-2 duration-300 md:hidden`}
    >
      <Image src={LOGO} alt="Logo Aloura" width={100} height={100} className="fixed top-0 left-0" />

      {Object.entries(ROUTES).map(([key, value]) => {
        return (
          <Link key={key} href={value.URL} onClick={() => handler()}>
            {value.LABEL}
          </Link>
        );
      })}
    </nav>
  );
}
