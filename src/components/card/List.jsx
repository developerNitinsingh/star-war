import React from "react";
import { useState } from "react";
import {
  more,
  cross,
  moviePoster,
  view,
  download,
  privete,
  rename,
  share,
  move,
  dt,
  confirm,
} from "../../assets/icons";

function List({ listDetail, first, second, third }) {
  const [newStyles, setnewStyle] = useState({ display: "none" });
  const [popup, setpopup] = useState({ display: "none" });
  const [deleteBox, setdeleteBox] = useState({ display: "none" });

  const clickEvent = () => {
    if (newStyles.display == "none") {
      setnewStyle({ display: "block" });
    }
  };
  const closeEvent = () => {
    if (newStyles.display == "block") {
      setnewStyle({ display: "none" });
    }
  };

  const openblock = () => {
    if (popup.display == "none") {
      setpopup({ display: "block" });
    }
  };
  const closeblock = () => {
    if (popup.display == "block") {
      setpopup({ display: "none" });
    }
    if (deleteBox.display == "none") {
      setdeleteBox({ display: "block" });
    }
  };

  const closeDelete = () => {
    if (deleteBox.display == "block") {
      setdeleteBox({ display: "none" });
    }
  };
  return (
    <div className="">
      <div
        className="text-white flex justify-between w-full border-b p-2 text-xs sm:text-sm"
        onClick={clickEvent}
      >
        <p className="">{first}</p>
        <p className="">{second}</p>
        <p className="">{third}</p>
        <img src={more} alt="" className="" />
      </div>
      <div className="w-full bg-[#03123D] px-5  " style={newStyles}>
        <div className="flex justify-between  border-b py-1">
          <h1 className="">Movie details</h1>
          <img src={cross} alt="" onClick={closeEvent} />
        </div>
        <div className="">
          <label htmlFor="">image</label>
          <img src={moviePoster} alt="" className="" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={first}
            className="rounded-lg  pt-2 pr-3 pl-2 pb-3"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">opening Crawl</label>
          <input
            type="text"
            className="rounded-lg px-4 py-4"
            placeholder="opening Crawl"
            value={second}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Genere</label>
          <input
            type="text"
            className="rounded-lg pt-2 pr-3 pl-2 pb-3"
            placeholder="Genere"
            value={third}
          />
        </div>
        <div
          className=" rounded-lg text-center mt-20 bg-[#CB1A80] w-full text-white"
          onClick={closeEvent}
        >
          <button className="bg-[#CB1A80] w-full rounded-lg p-3 text-white">
            Close
          </button>
        </div>
      </div>

      <div className="">
        <div
          className="w-[172px] rounded p-2 flex flex-col gap-1 bg-white text-black z-[99] absolute"
          style={popup}
        >
          <div className="flex gap-4 p-1">
            <img src={view} alt="" />
            <p className="">View</p>
          </div>
          <div className="flex gap-4 p-1">
            <img src={download} alt="" />
            <p className="">Download</p>
          </div>
          <div className="flex gap-4 p-1">
            <img src={rename} alt="" />
            <p className="">Rename</p>
          </div>
          <div className="flex gap-4 p-1">
            <img src={share} alt="" />
            <p className="">Share link</p>
          </div>
          <div className="flex gap-4 p-1">
            <img src={move} alt="" />
            <p className="">Move</p>
          </div>
          <div className="flex gap-4 p-1">
            <img src={privete} alt="" />
            <p className="">Mark private</p>
          </div>
          <div className="flex gap-4 p-1 text-red-600" onClick={closeblock}>
            <img src={dt} alt="" />
            <p className="">Delete</p>
          </div>
        </div>
      </div>

      {/* ++++++++++++++++ */}

      <div
        className="w-[400px]  bg-white p-6 text-black absolute z-[999] h-[248px] "
        style={deleteBox}
      >
        <div className="">
          <img src={confirm} alt="" />
        </div>
        <div className="">
          <h1 className="text-lg font-medium">Caution!</h1>
        </div>
        <div className="">
          <p className="text-sm font-normal">
            Are you sure you want to Delete{" "}
            <span className="font-bold">{first}</span>
          </p>
        </div>
        <div className="flex  gap-2 mt-7">
          <button
            className="flex-1 hover:bg-red-500 py-4 px-4 rounded-lg"
            onClick={closeDelete}
          >
            Cancel
          </button>
          <button
            className="flex-1 bg-red-500 py-4 px-4 rounded-lg text-white"
            onClick={closeDelete}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default List;
