import Image from "next/image";
import { Navbar } from "./components/navbar";
import { FirstSection } from "./components/firstSec";

export default function Home() {
  return (
    <main className={`bg-white text-black`}>
      <Navbar />
      <FirstSection />
    </main>
  );
}
