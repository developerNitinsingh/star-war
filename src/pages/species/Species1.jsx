import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Search from "../../components/header/Search";
import SideBar from "../../components/sideBar/SideBar";
import { grid, list } from "../../assets/icons";
import List from "../../components/card/List";
import { NavLink } from "react-router-dom";

function Species1() {
  const [ListDetails, setListDetails] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      let response = await fetch("https://swapi.dev/api/species/");
      response = await response.json();
      setListDetails(response.results);
    }
    fetchApi();
  }, []);

  return (
    <>
      <Header search={<Search />} />
      <div className="flex justify-between gap-6 bg-[#03123D] mr-2 sm:mr-5">
        <div className="">
          <SideBar />
        </div>

        <div className="w-[80vw]">
          <div className="flex justify-between  text-white  mb-4 flex-1">
            <p className="">Species</p>
            <div className="flex border  h-[32px] gap-3 ">
              <NavLink
                to="/species2"
                className={({ isActive }) =>
                  `${isActive ? "bg-white" : "bg-[#03123D]"}`
                }
              >
                <div className="flex items-center pt-1">
                  <img src={grid} alt="" />
                  <label
                    htmlFor=""
                    // className={({ isActive }) => {
                    //   `${isActive ? "block" : "hidden"} text-black`;
                    // }}
                  >
                    Grid
                  </label>
                </div>
              </NavLink>
              <NavLink
                to="/species"
                className={({ isActive }) =>
                  `${isActive ? "bg-white" : "bg-[#03123D]"}`
                }
              >
                <div className="flex items-center pt-1">
                  <img src={list} alt="" />
                  <label
                    htmlFor=""
                    // className={({ isActive }) => {
                    //   `${isActive ? "block" : "hidden"} text-black`;
                    // }}
                  >
                    List
                  </label>
                </div>
              </NavLink>
            </div>
          </div>

          <div className="text-white w-full">
            <div className="flex justify-between text-left flex-1 bg-[#F9FAFD33] p-2 mb-4">
              <p className="w-[33%]">Name</p>
              <p className="w-[33%]">Directer</p>
              <p className="w-[33%]">Relese Date</p>
            </div>
            <div className="flex  gap-y-4 flex-wrap justify-center flex-col ">
              {/*Loop and Add TodoItem here */}
              {ListDetails.map((listDetails) => (
                <div key={listDetails.created} className="">
                  <List
                    listDetail={listDetails}
                    first={listDetails.name}
                    second={listDetails.homeworld}
                    third={listDetails.average_lifespan}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Species1;
