import { FirstSection } from "./firstSec";
import { InputSection } from "./inputSection";
import { Navbar } from "./navbar";

export const OnlyPage = () => {
  return (
    <main className={`bg-gray-200 text-black`}>
      <Navbar />
      <FirstSection />
      <InputSection />
    </main>
  );
};

export default OnlyPage;
