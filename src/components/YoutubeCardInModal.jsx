import React from "react";

const YoutubeCardInModal = () => {
  function modal() {
    console.log("modal");
  }
  return (
    <>
      <div
        className="m-4  rounded-xl hover:cursor-pointer flex flex-row  "
        onClick={modal}
      >
        {/* 1 */}
        <div className="bg-gray-700 w-fit h-1/2 rounded-xl overflow-hidden mr-2">
          <img src="../images/coffee.jpg" alt="" className="h-60 w-fit" />
        </div>
        <div className="flex flex-row my-2 ">
          {/* logo */}
          <div className="rounded-full bg-yellow-500 h-9 w-9 md:h-11 md:w-11 mr-2 flex md:hidden ">
            <img
              src="../images/flower.jpg"
              alt="creators image"
              className="rounded-full  h-9 w-9 md:h-11 md:w-11"
            />
          </div>
          <div>
            <h1 className="text-white">
              title jfdlkdfj ifjglfkfjgtiohjlfkhjtlkjiyjfkmgmgl
            </h1>
            <h2 className="text-white">creator name</h2>
            <h6 className="text-white">time and views</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default YoutubeCardInModal;
