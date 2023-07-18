import { FirstSection } from "./firstSec";
import { Navbar } from "./navbar";

export const OnlyPage = () => {
  return (
    <main className={`bg-white text-black`}>
      <Navbar />
      <FirstSection />
    </main>
  );
};

export default OnlyPage;
