import React from "react";
import YoutubeVideo from "./YoutubeVideo";
import YoutubeCard from "./YoutubeCard";

const YoutubeSecondary = () => {
  return (
    <>
      <div className="flex flex-row md:flex-col">
        {/* youtubeVideo */}
        <div>
          <YoutubeVideo />
        </div>
        {/* youtubeVideoCard */}
        <div className="flex flex-col">
          <YoutubeCard />
          <YoutubeCard />
          <YoutubeCard />
          <YoutubeCard />
          <YoutubeCard />
          <YoutubeCard />
        </div>
      </div>
    </>
  );
};

export default YoutubeSecondary;
