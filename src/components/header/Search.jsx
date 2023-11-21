import React from "react";
import { srch } from "../../assets/icons";

function Search({ className = "" }) {
  return (
    <div
      className={`flex border rounded-[4px] items-center gap-2 pt-1 pb-1 pl-2 pr-2 ${className} `}
    >
      <img src={srch} alt="" className="hover: " />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent focus:outline-none text-white w-24 sm:w-auto"
      />
    </div>
  );
}

export default Search;
