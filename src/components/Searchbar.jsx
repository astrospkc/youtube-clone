import React from "react";
import { useState } from "react";
import { BsList, BsSearch } from "react-icons/bs";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

import YoutubeVideo from "./YoutubeVideo";
import YoutubeMain from "./YoutubeMain";

const Searchbar = () => {
  const [searchMenu, setSearchMenu] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState(false);

  function handleDropDown() {
    setDropdownMenu((prev) => !prev);
  }

  function handleSearch() {
    setSearchMenu((prev) => !prev);
  }
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row ">
          {/*this is hamburger and youtube logo and name section  */}
          <div className="flex flex-row items-center m-4 ">
            <div className="mx-0 md:mx-5 mr-3 md:mr-6 hidden md:flex">
              <BsList
                className="text-white text-3xl"
                onClick={handleDropDown}
              />
            </div>

            {/* youtube logo */}
            <Link to="/">
              <div className="flex flex-row items-center hover:cursor-pointer">
                <div className="mr-2">
                  <img src="youtubelo.png" alt="" className="h-7 md:h-10  " />
                </div>
                <div>
                  <h1
                    className="text-white text-xl md:text-2xl font-bold"
                    style={{ fontFamily: "Oswald" }}
                  >
                    YouTube
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          {/* delete it after use */}
          <Link to="/test">
            <div className="text-white bg-red-500 hover:cursor-pointer">
              go to
            </div>
          </Link>
          <div className="flex md:hidden items-center  ">
            <BsSearch
              className="text-white text-xl hover:text-gray-600 hover:cursor-pointer"
              onClick={handleSearch}
            />
            <div
              className={
                searchMenu
                  ? " w-5/6 flex justify-center items-center mx-6 "
                  : "hidden"
              }
            >
              <input
                type="text"
                placeholder="Search"
                className="bg-black w-[90%] h-3 md:h-11 rounded-3xl p-3 border-2 "
              />
            </div>
          </div>
          <div className=" w-5/6 hidden md:flex justify-center items-center ">
            <input
              type="text"
              placeholder="Search"
              className="bg-black w-1/3  h-11 rounded-3xl p-3 border-2 "
            />
          </div>
          {/* theme change */}
        </div>
        <div className="flex flex-row ">
          <div
            className={
              dropdownMenu ? "w-1/5 h-fit bg-slate-950 flex" : "hidden"
            }
          >
            <SideBar />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
