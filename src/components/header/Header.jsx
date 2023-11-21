import React from "react";
import { logo } from "../../assets/icons";

function Header({ search }) {
  return (
    <header className="flex justify-between px-2 py-5  sm:p-5  bg-[#03123D] items-center w-full">
      <img src={logo} alt="" className="w-[72px] h-[36px] " />
      <div className="">{search}</div>
    </header>
  );
}

export default Header;
