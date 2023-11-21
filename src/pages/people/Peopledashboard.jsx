import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Search from "../../components/header/Search";
import SideBar from "../../components/sideBar/SideBar";
import { grid, list } from "../../assets/icons";
import List from "../../components/card/List";
import PeopleDashboard2 from "./PeopleDashboard2";
import { NavLink } from "react-router-dom";

function PeopleDashboard1() {
  const [PeopleDetails, setPeopleDetails] = useState([]);
  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => {
        setPeopleDetails(data.results);
      });
  });
  return (
    <>
      <Header search={<Search />} />
      <div className="flex px-5 sm:px-5 gap-6 bg-[#03123D]">
        <div className="">
          <SideBar />
        </div>

        <div className="">
          <div className="flex justify-between w-[calc(100vw-150px)] sm:w-[calc(100vw-273px)] text-white items-center mb-4">
            <p className="">People</p>
            <div className="flex border  h-[32px] gap-3 ">
              <NavLink
                to="/people2"
                className={({ isActive }) =>
                  `${isActive ? "bg-white" : "bg-[#03123D]"}`
                }
              >
                <div className="flex items-center pt-1">
                  <img src={grid} alt="" />
                  <label
                    htmlFor=""
                    className={({ isActive }) => {
                      `${isActive ? "block" : "hidden"} text-black`;
                    }}
                  >
                    Grid
                  </label>
                </div>
              </NavLink>
              <NavLink
                to="/people"
                className={({ isActive }) =>
                  `${isActive ? "bg-white" : "bg-[#03123D]"}`
                }
              >
                <div className="flex items-center pt-1">
                  <img src={list} alt="" />
                  <label
                    htmlFor=""
                    className={({ isActive }) => {
                      `${isActive ? "block" : "hidden"} text-black`;
                    }}
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
              <p className="w-[33%]">Birthdate</p>
              <p className="w-[33%]">Species</p>
            </div>
            <div className="flex  gap-y-4 flex-wrap justify-center flex-col ">
              {/*Loop and Add TodoItem here */}
              {PeopleDetails.map((PeopleDetail) => (
                <div key={PeopleDetail.height} className="">
                  <List
                    listDetail={PeopleDetail}
                    first={PeopleDetail.name}
                    second={PeopleDetail.birth_year}
                    third={PeopleDetail.species}
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

export default PeopleDashboard1;
