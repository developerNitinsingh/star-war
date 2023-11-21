import React from "react";
import SideBar from "../components/sideBar/SideBar";
import Header from "../components/header/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="flex  justify-between gap-6 h-[95vh]  bg-[#03123D]  pt-10 px-2  sm:px-5">
        <div className="w-14 sm:w-52">
          <SideBar />
        </div>
        <div className=" max-w-[647px] flex justify-center  p-6 flex-col text-black bg-white h-[386px] w-3/4 mx-auto rounded-xl gap-3 ">
          <img
            src="https://picsum.photos/seed/picsum/647/218"
            alt=""
            className=" mx-auto rounded-lg"
          />
          <h1 className="text-xl font-bold text-left">
            Welcome to the stars wars dashboard
          </h1>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
            dolorem temporibus laborum consequatur asperiores repellendus
            reiciendis fuga excepturi commodi, voluptates vitae consequuntur
            cupiditate enim quis perferendis nisi, quo explicabo repellat.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
