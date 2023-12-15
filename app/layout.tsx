import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aloura | Food truck",
  description: "Le Food truck niçois qui vous fait voyager",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={font.className}>
        <Header />

        <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-r from-gray-500 to-gray-900 pb-4">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
