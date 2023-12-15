import Link from "next/link";

// Commons
import { ROUTES, TITLE } from "@/commons/commons";

export function Footer() {
  return (
    <footer className="flex flex-col flex-wrap items-center justify-center gap-4 bg-black text-white p-4">
      <div className="flex flex-wrap justify-center gap-4">
        {Object.entries(ROUTES).map(([key, value]) => {
          return (
            <Link key={key} href={value.URL}>
              {value.LABEL}
            </Link>
          );
        })}
      </div>

      <p>{TITLE} - 2024</p>
    </footer>
  );
}
