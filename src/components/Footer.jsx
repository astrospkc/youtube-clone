import React from "react";
import {
  BsHouseDoorFill,
  BsPlayFill,
  BsCollectionPlayFill,
  BsCircle,
} from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="bg-black flex items-center justify-evenly fixed bottom-0 w-full md:hidden">
        <ul className="flex flex-row">
          <div className="mx-4 my-2 flex flex-col items-center hover:text-gray-600 ">
            <BsHouseDoorFill className="text-xl text-white" />
            <li className="text-xs text-white">home</li>
          </div>
          <div className="mx-4 my-2 flex flex-col items-center ">
            <BsPlayFill className="text-xl text-white" />
            <li className="text-xs text-white">shorts</li>
          </div>
          <div className="mx-4 my-2 flex flex-col items-center">
            <BsCollectionPlayFill className="text-xl text-white" />
            <li className="text-xs text-white">subscription</li>
          </div>
          <div className="mx-4 my-2 flex flex-col items-center">
            <BsCircle className="text-xl text-white" />
            <li className="text-xs text-white">library</li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Footer;
