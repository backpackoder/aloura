import Link from "next/link";

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
      className={`-z-50 absolute top-full ${
        isMenuOpen ? "" : "-translate-y-full"
      } left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 w-full bg-black p-2 duration-300 md:hidden`}
    >
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
