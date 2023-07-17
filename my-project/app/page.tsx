import Image from "next/image";
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <main className={`bg-white text-black`}>
      <Navbar />
    </main>
  );
}
