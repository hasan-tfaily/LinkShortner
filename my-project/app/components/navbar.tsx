import { useState } from "react";

export interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  const [showList, setshowList] = useState(false);

  const handleShowList = () => {
    setshowList(!showList);
  };

  return (
    <div className={`flex justify-between py-5 pe-5 ps-10`}>
      <div className="flex">
        {" "}
        <ul className="grid grid-cols-4 space-x-6  ">
          <li className="text-3xl pr-10">Shorty</li>
          <li className="my-auto hidden sm:block">feature</li>
          <li className="my-auto hidden sm:block">pricing</li>
          <li className="my-auto hidden sm:block">resource</li>
        </ul>
      </div>
      <div className="grid grid-cols-2  ">
        <p className="my-auto hidden sm:block ">log In</p>
        <p className="my-auto hidden sm:block whitespace-nowrap">sign up</p>
      </div>
      {/* <div>
        <button
          className="lg:hidden md:hidden sm:block"
          onClick={handleShowList}
        >
          {" "}
          x
        </button>
        <div
          className={` lg:hidden md:hidden sm:hidden ${
            showList ? "!sm:block" : "!sm:hidden"
          }`}
        >
          <ul className=" ">
            <li className="">Shorty</li>
            <li className="">feature</li>
            <li className="">pricing</li>
            <li className="">resource</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};
