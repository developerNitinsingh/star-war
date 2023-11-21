import React, { useEffect, useState } from "react";
import SideBar from "../components/sideBar/SideBar";
import Header from "../components/header/Header";
import Search from "../components/header/Search";
import { film, grid, list } from "../assets/icons";
import Card from "../components/card/Card";

function FilmDashboard() {
  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data.results);
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
            <p className="">Film</p>
            <div className="flex border  h-[32px] gap-3 pr-1">
              <div className="flex items-center">
                <img src={grid} alt="" />
                <label htmlFor="">Grid</label>
              </div>
              <div className="flex items-center">
                <img src={list} alt="" />
                <label htmlFor="">List</label>
              </div>
            </div>
          </div>

          <div className="flex  gap-x-3 flex-wrap justify-center ">
            {/*Loop and Add TodoItem here */}
            {movieDetails.map((filmDetail) => (
              <div
                key={filmDetail.episode_id}
                className="w-[100%] sm:w-[40%] lg:w-[30%]"
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
