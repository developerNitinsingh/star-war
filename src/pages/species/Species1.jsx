import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Search from "../../components/header/Search";
import SideBar from "../../components/sideBar/SideBar";
import { grid, list } from "../../assets/icons";
import List from "../../components/card/List";

function Species1() {
  const [ListDetails, setListDetails] = useState([]);
  useEffect(() => {
    fetch("https://swapi.dev/api/species/")
      .then((response) => response.json())
      .then((data) => {
        setListDetails(data.results);
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
            <p className="">Species</p>
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
