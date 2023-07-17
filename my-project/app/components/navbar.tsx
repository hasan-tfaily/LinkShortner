export interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  return (
    <div className={`flex justify-between py-10 pe-5 ps-10`}>
      <div className="flex">
        {" "}
        <ul className="grid grid-cols-4 space-x-6  ">
          <li className="text-3xl pr-10">Shorty</li>
          <li className="my-auto">feature</li>
          <li className="my-auto">pricing</li>
          <li className="my-auto">resource</li>
        </ul>
      </div>
      <div className="grid grid-cols-2 ">
        <p className="my-auto">log In</p>
        <p className="my-auto">sign up</p>
      </div>
    </div>
  );
};
