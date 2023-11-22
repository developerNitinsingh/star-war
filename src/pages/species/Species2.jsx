import React, { useEffect, useState } from "react";
import SideBar from "../../components/sideBar/SideBar";
import Header from "../../components/header/Header";
import Search from "../../components/header/Search";
import { alien, grid, list, planet } from "../../assets/icons";
import Card from "../../components/card/Card";
import { NavLink } from "react-router-dom";

function Species2() {
  const [PeopleDetails, setPeopleDetails] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      let response = await fetch("https://swapi.dev/api/species/");
      response = await response.json();
      setPeopleDetails(response.results);
    }
    fetchApi();
  }, []);

  return (
    <>
      <Header search={<Search />} />
      <div className="flex px-5 sm:px-5 gap-6 bg-[#03123D]">
        <div className="">
          <SideBar />
        </div>

        <div className="">
          <div className="flex justify-between w-[calc(100vw-150px)] sm:w-[calc(100vw-273px)] text-white items-center mb-4">
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

          <div className="flex  gap-x-3 flex-wrap justify-center ">
            {/*Loop and Add TodoItem here */}
            {PeopleDetails.map((PeopleDetail) => (
              <div
                key={PeopleDetail.created}
                className="w-[100%] sm:w-[40%] lg:w-[30%]"
              >
                <Card
                  movieDetail={PeopleDetail}
                  first={PeopleDetail.name}
                  img={alien}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Species2;
