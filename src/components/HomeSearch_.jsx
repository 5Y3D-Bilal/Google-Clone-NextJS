"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdMic } from "react-icons/io";

export default function HomeSearch_() {
  const [randomSearchLoding, setRandomSearchLoading] = useState(false);

  const router = useRouter();
  const [input, setInput] = useState("");
  const handleSumbit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async (e) => {
    setRandomSearchLoading(true);
    const res = await fetch(`https://random-word-api.herokuapp.com/word`)
      .then((data) => data.json())
      .then((finalResult) => {
        console.log(finalResult[0]);
        if (!finalResult) return;
        router.push(`/search/web?searchTerm=${finalResult[0]}`);
      });
    setRandomSearchLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSumbit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl items-center"
      >
        <IoIosSearch className="text-xl text-gray-500 mr-3 hover:cursor-pointer" />
        <input
          type="text"
          className="flex-grow focus:outline-none "
          placeholder="Search Google or type a URL"
          // value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <IoMdMic className="text-lg hover:cursor-pointer" />
      </form>
      <div className="flex flex-col  sm:space-y-0 justify-center sm:flex-row mt-8 gap-2">
        <button
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow"
          onClick={handleSumbit}
        >
          Google Search
        </button>
        <button
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow"
          onClick={randomSearch}
          disabled={randomSearchLoding}
        >
          {randomSearchLoding ? (
            <>
              <div className="wrapper">
                <div className="blue ball"></div>
                <div className="red ball"></div>
                <div className="yellow ball"></div>
                <div className="green ball"></div>
              </div>
            </>
          ) : (
            "I am felling lucky"
          )}
        </button>
      </div>
    </>
  );
}
