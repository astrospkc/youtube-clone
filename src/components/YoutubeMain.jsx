import React, { useEffect, useState } from "react";
import YoutubeCard from "./YoutubeCard";

const YoutubeMain = () => {
  const [data, setData] = useState([]);

  const url =
    " https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=AIzaSyCIbct7tv6ymwmlfjJI9-9pdUxeJF10opc ";

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data.items);
      setData(data.items);
    } catch (error) {
      console.log(error);
    }
  };
  const getItems = data.map((datas) => datas.snippet);
  // console.log("new items", getItems);

  const getImage = data.map((e) => e.snippet.thumbnails.default);
  console.log("new Image", getImage);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 m-4 ">
        {getItems &&
          getItems.map((e, i) => {
            const { title, publishedAt, channelTitle } = e;
            return (
              <div key={i}>
                <YoutubeCard
                  title={title}
                  publishedAt={publishedAt}
                  channelTitle={channelTitle}
                />{" "}
              </div>
            );
          })}

        {/* <YoutubeCard />
        <YoutubeCard />

        <YoutubeCard />

        <YoutubeCard />

        <YoutubeCard /> */}
      </div>
    </>
  );
};

export default YoutubeMain;

// AIzaSyCIbct7tv6ymwmlfjJI9-9pdUxeJF10opc
// Use this key in your application by passing it with key=API_KEY parameter.

// https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyCIbct7tv6ymwmlfjJI9-9pdUxeJF10opc
