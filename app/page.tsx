// Components
import { Banner } from "./components/home/Banner";
import { About } from "./components/About";
import { OurMenu } from "./components/OurMenu";
import { Locations } from "./components/Locations";
import { BookUs } from "./components/BookUs";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <OurMenu />
      <Locations />
      <BookUs />
    </>
  );
}
