import Image from "next/image";
import imageSrc from "./assets/deskgirl.png";
export interface FirstSectionProps {}

export const FirstSection = ({}: FirstSectionProps) => {
  return (
    <div>
      <div className={` grid grid-cols-2 space-x-4 lg:px-52 sm:px-20 py-20`}>
        <div className={``}>
          <p className={`text-5xl `}> More than Just shorter link</p>
          <p>
            build your brads build your brads build your brads build your brads
            build your brads
          </p>
          <p className=" text-2xl bg-blue-500 rounded-2xl text-white font-bold p-3 w-40">
            {" "}
            Get Started
          </p>
        </div>
        <div className="!mx-auto">
          {" "}
          <Image src={imageSrc} height={200} width={200} alt={`hello`} />
        </div>
      </div>
    </div>
  );
};
