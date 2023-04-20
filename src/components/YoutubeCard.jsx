import React from "react";
import YoutubeVideo from "./YoutubeVideo";
import { Link } from "react-router-dom";

const YoutubeCard = (props) => {
  const { title, publishedAt, channelTitle } = props;
  return (
    <>
      <Link to="/youtubeVideo">
        <div className="m-4  rounded-xl hover:cursor-pointer hover:bg-slate-500 ">
          {/* 1 */}
          <div className="bg-gray-700 w-full h-fit rounded-xl overflow-hidden">
            <img src="../images/coffee.jpg" alt="" />
          </div>
          <div className="flex flex-row my-2 ">
            {/* logo */}
            <div className="rounded-full bg-yellow-500  h-9 w-9 md:h-11 md:w-11 mr-2 ">
              <img
                src="../images/flower.jpg"
                alt="creators image"
                className="rounded-full  h-9 w-9 md:h-11 md:w-11"
              />
            </div>
            <div>
              <h1 className="text-white">{title}</h1>
              <h2 className="text-white">{channelTitle}</h2>
              <h6 className="text-white">{publishedAt}</h6>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default YoutubeCard;
