import React from "react";
import { logo } from "../../assets/icons";
import { NavLink } from "react-router-dom";

function Header({ search }) {
  return (
    <header className="flex justify-between px-2 py-5  sm:p-5  bg-[#03123D] items-center w-full">
      <NavLink to="/">
        <img src={logo} alt="" className="w-[72px] h-[36px] " />
      </NavLink>
      <div className="">{search}</div>
    </header>
  );
}

export default Header;
