export interface OutPutProps {
  originalLink?: string;
  shortLink?: string;
}

export const Output = ({ originalLink, shortLink }: OutPutProps) => {
  return (
    <div className="mx-5 px-5 bg-white my-10 py-4 rounded-xl grid grid-cols-2">
      {" "}
      <div>{originalLink}</div>
      <div className="text-black flex">
        <div className={` px-3 `}>{shortLink}</div>
        <div>
          <button> coppy</button>
        </div>
      </div>
    </div>
  );
};
