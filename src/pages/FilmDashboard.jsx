import React, { useEffect, useState } from "react";
import SideBar from "../components/sideBar/SideBar";
import Header from "../components/header/Header";
import Search from "../components/header/Search";
import { film, grid, list } from "../assets/icons";
import Card from "../components/card/Card";
import { NavLink } from "react-router-dom";
import { data } from "autoprefixer";

function FilmDashboard() {
  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      let response = await fetch("https://swapi.dev/api/films");
      response = await response.json();
      setMovieDetails(response.results);
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

        <div className="flex flex-col  justify-between  w-[80vw]">
          <div className="flex justify-between  text-white  mb-4 flex-1">
            <p className="">Film</p>
            <div className="flex border h-[32px] gap-3 pr-1 text-xs">
              <NavLink
                to="/film"
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
                to="/film2"
                className={({ isActive }) =>
                  `${isActive ? "bg-white" : "bg-[#03123D]"}`
                }
              >
                <div className="flex items-center ">
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
            {movieDetails.map((filmDetail) => (
              <div
                key={filmDetail.episode_id}
                className="w-[100%]  lg:w-[30%] mb-5"
              >
                <Card
                  movieDetail={filmDetail}
                  img={film}
                  first={filmDetail.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FilmDashboard;
