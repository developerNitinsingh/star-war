import React, { useRef, useState } from "react";
import { folder, careright } from "../../assets/icons";
import { NavLink, Link } from "react-router-dom";

function SideBar() {
  const [movieStyle1, setMovieStyle1] = useState({ display: "none" });
  const [movieStyle2, setMovieStyle2] = useState({ display: "none" });
  const [movieStyle3, setMovieStyle3] = useState({ display: "none" });
  const [movieStyle4, setMovieStyle4] = useState({ display: "none" });
  const [movieStyle5, setMovieStyle5] = useState({ display: "none" });
  const [movieStyle6, setMovieStyle6] = useState({ display: "none" });

  const handleClick1 = () => {
    if (movieStyle1.display == "none") {
      setMovieStyle1({ display: "flex" });
    } else {
      setMovieStyle1({ display: "none" });
    }
  };
  const handleClick2 = () => {
    if (movieStyle2.display == "none") {
      setMovieStyle2({ display: "flex" });
    } else {
      setMovieStyle2({ display: "none" });
    }
  };
  const handleClick3 = () => {
    if (movieStyle3.display == "none") {
      setMovieStyle3({ display: "flex" });
    } else {
      setMovieStyle3({ display: "none" });
    }
  };
  const handleClick4 = () => {
    if (movieStyle4.display == "none") {
      setMovieStyle4({ display: "flex" });
    } else {
      setMovieStyle4({ display: "none" });
    }
  };
  const handleClick5 = () => {
    if (movieStyle5.display == "none") {
      setMovieStyle5({ display: "flex" });
    } else {
      setMovieStyle5({ display: "none" });
    }
  };
  const handleClick6 = () => {
    if (movieStyle6.display == "none") {
      setMovieStyle6({ display: "flex" });
    } else {
      setMovieStyle6({ display: "none" });
    }
  };

  return (
    <div className="text-white flex flex-col gap-3 w-14 sm:w-52">
      <div
        className="w-full  bg-[#03123D] gap-3 flex flex-col"
        onClick={handleClick1}
      >
        <div className="flex justify-between hover:bg-[#CB1A80] p-2 rounded-md">
          <div className="flex gap-1">
            <img src={folder} alt="" />
            <p className="hidden sm:block ">Films</p>
          </div>
          <img src={careright} alt="" className="rotate-90 hover:rotate-180" />
        </div>
        <NavLink
          to="/film"
          className={({ isActive }) =>
            `${isActive ? "bg-[#F9FAFD33]" : "bg-[#03123D]"}`
          }
        >
          <div
            className="flex justify-between  hover:bg-[#CB1A80] p-2 rounded-md"
            style={movieStyle1}
          >
            <div className="flex ml-3 gap-1">
              <img src={folder} alt="" />
              <p className="">Movies</p>
            </div>
            <img
              src={careright}
              alt=""
              className="rotate-90 hover:rotate-180"
            />
          </div>
        </NavLink>
      </div>

      {/* 2nd */}

      <div
        className="w-full  bg-[#03123D] gap-3 flex flex-col"
        onClick={handleClick2}
      >
        <div className="flex justify-between  hover:bg-[#CB1A80] p-2 rounded-md">
          <div className="flex gap-1">
            <img src={folder} alt="" />
            <p className="hidden sm:block">People</p>
          </div>
          <img src={careright} alt="" className="rotate-90 hover:rotate-180" />
        </div>
        <NavLink
          to="/people"
          className={({ isActive }) =>
            `${isActive ? "bg-[#F9FAFD33]" : "bg-[#03123D]"}`
          }
        >
          <div
            className="flex justify-between  hover:bg-[#CB1A80] p-2 rounded-md"
            style={movieStyle2}
          >
            <div className="flex ml-3 gap-1">
              <img src={folder} alt="" />
              <p className="">People</p>
            </div>
            <img
              src={careright}
              alt=""
              className="rotate-90 hover:rotate-180"
            />
          </div>
        </NavLink>
      </div>

      {/* 3rd */}

      <div
        className="w-full  bg-[#03123D] gap-3 flex flex-col"
        onClick={handleClick3}
      >
        <div className="flex justify-between hover:bg-[#CB1A80] p-2 rounded-md">
          <div className="flex gap-1">
            <img src={folder} alt="" />
            <p className="hidden sm:block">Planets</p>
          </div>
          <img src={careright} alt="" className="rotate-90 hover:rotate-180" />
        </div>
        <NavLink
          to="/planet"
          className={({ isActive }) =>
            `${isActive ? "bg-[#F9FAFD33]" : "bg-[#03123D]"}`
          }
        >
          <div
            className="flex justify-between hover:bg-[#CB1A80] p-2 rounded-md"
            style={movieStyle3}
          >
            <div className="flex ml-3 gap-1">
              <img src={folder} alt="" />
              <p className="">Planet</p>
            </div>
            <img
              src={careright}
              alt=""
              className="rotate-90 hover:rotate-180"
            />
          </div>
        </NavLink>
      </div>

      {/* 4th */}

      <div
        className="w-full  bg-[#03123D] gap-3 flex flex-col"
        onClick={handleClick4}
      >
        <div className="flex justify-between hover:bg-[#CB1A80] p-2 rounded-md">
          <div className="flex gap-1">
            <img src={folder} alt="" />
            <p className="hidden sm:block">Species</p>
          </div>
          <img src={careright} alt="" className="rotate-90 hover:rotate-180" />
        </div>
        <NavLink
          to="/species"
          className={({ isActive }) =>
            `${isActive ? "bg-[#F9FAFD33]" : "bg-[#03123D]"}`
          }
        >
          <div
            className="flex justify-between hover:bg-[#CB1A80] p-2 rounded-md"
            style={movieStyle4}
          >
            <div className="flex ml-3 gap-1">
              <img src={folder} alt="" />
              <p className="">Species</p>
            </div>
            <img
              src={careright}
              alt=""
              className="rotate-90 hover:rotate-180"
            />
          </div>
        </NavLink>
      </div>

      {/* 5th */}

      <div
        className="w-full  bg-[#03123D] gap-3 flex flex-col"
        onClick={handleClick5}
      >
        <div className="flex justify-between hover:bg-[#CB1A80] p-2 rounded-md">
          <div className="flex gap-1">
            <img src={folder} alt="" />
            <p className="hidden sm:block">Starship</p>
          </div>
          <img src={careright} alt="" className="rotate-90" />
        </div>
        <NavLink
          to="/starship"
          className={({ isActive }) =>
            `${isActive ? "bg-[#F9FAFD33]" : "bg-[#03123D]"}`
          }
        >
          <div
            className="flex justify-between hover:bg-[#CB1A80] p-2 rounded-md"
            style={movieStyle5}
          >
            <div className="flex ml-3 gap-1">
              <img src={folder} alt="" />
              <p className="">Starship</p>
            </div>
            <img
              src={careright}
              alt=""
              className="rotate-90 hover:rotate-180"
            />
          </div>
        </NavLink>
      </div>

      {/* 6th */}

      <div
        className="w-full  bg-[#03123D] gap-3 flex flex-col"
        onClick={handleClick6}
      >
        <div className="flex justify-between hover:bg-[#CB1A80] p-2 rounded-md">
          <div className="flex gap-1">
            <img src={folder} alt="" />
            <p className="hidden sm:block">Vehicles</p>
          </div>
          <img src={careright} alt="" className="rotate-90 hover:rotate-180" />
        </div>
        <NavLink
          to="/vehicles"
          className={({ isActive }) =>
            `${isActive ? "bg-[#F9FAFD33]" : "bg-[#03123D]"}`
          }
        >
          <div
            className="flex justify-between hover:bg-[#CB1A80] p-2 rounded-md "
            style={movieStyle6}
          >
            <div className="flex ml-3 gap-1">
              <img src={folder} alt="" />
              <p className="text-">Vehicles</p>
            </div>
            <img src={careright} alt="" className="rotate-90" />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
