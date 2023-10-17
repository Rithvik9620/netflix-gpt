import React from "react";
import { useSelector } from "react-redux";
import { translations } from "../utils/constants";

const GPTSearchBar = () => {
  const language = useSelector((store) => store.pref.language);
  return (
    <div className="pt-[8%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12 bg-black bg-opacity-70">
        <input
          type="text"
          placeholder={translations[language].placeholder}
          className="col-span-9 px-4 py-2 m-4"
        />
        <button className="m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3">
          {translations[language].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
