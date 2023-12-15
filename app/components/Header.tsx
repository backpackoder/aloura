"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Assets
import LOGO from "@/assets/images/logo.png";

// Commons
import { ROUTES } from "@/commons/commons";

// Components
import { HamburgerMenuBtn } from "./HamburgerMenuBtn";
import { HamburgerMenu } from "./HamburgerMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="z-50 relative text-white">
      <div className="flex items-center justify-between gap-4 w-full bg-gradient-to-br from-red-700 to-red-950 md:justify-center">
        <Link href={ROUTES.HOME.URL} className="duration-300 hover:scale-105">
          <Image src={LOGO} alt="Logo Aloura" width={100} height={100} />
        </Link>

        <nav className="hidden flex-wrap items-center justify-center gap-4 md:flex">
          {Object.entries(ROUTES).map(([key, value]) => {
            return (
              <Link
                key={key}
                href={value.URL}
                onClick={() => toggleMenu()}
                className="rounded-lg duration-300 hover:bg-black hover:p-2"
              >
                {value.LABEL}
              </Link>
            );
          })}
        </nav>

        <HamburgerMenuBtn isMenuOpen={isMenuOpen} handler={toggleMenu} />
      </div>

      <HamburgerMenu isMenuOpen={isMenuOpen} handler={toggleMenu} />
    </header>
  );
}
