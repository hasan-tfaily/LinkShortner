import { useEffect, useState } from "react";
import { Output } from "./output";

export interface InputSectionProps {}

interface Data {
  short_link: string;
  full_short_link: string;
  short_link2: string;
  full_short_link2: string;
  short_link3: string;
  full_short_link3: string;
  share_link: string;
  full_share_link: string;
  original_link: string;
}

export const InputSection = ({}: InputSectionProps) => {
  const [input, setInput] = useState("");
  const [shortenedURL, setShortenedURL] = useState<Data | null>(null); // Declare the type of shortenedURL as Data | null
  const [isLoading, setIsLoading] = useState(false);

  const handleShorten = async () => {
    setIsLoading(true);
    console.log(input);
    try {
      const apiUrl = `https://api.shrtco.de/v2/shorten?url=${input}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setShortenedURL(data.result);
      } else {
        console.error("Error shortening URL:", data.error);
      }
    } catch (error) {
      console.error("Error during URL shortening:", error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <div className="bg-[#6528F7] py-10 px-10 rounded-xl mx-3 flex">
        <input
          className={`w-full rounded-xl p-5 `}
          placeholder="place your url here"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className=" ml-3 bg-blue-500 rounded-2xl text-white font-bold p-3 whitespace-nowrap "
          onClick={handleShorten}
        >
          shorten it
        </button>
      </div>

      {shortenedURL && (
        <Output
          originalLink={shortenedURL.original_link}
          shortLink={shortenedURL.short_link}
        />
      )}
    </div>
  );
};
