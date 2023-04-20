import React from "react";

import YoutubeCardInModal from "./YoutubeCardInModal";

const YoutubeVideo = (props) => {
  const { setShowModal } = props;
  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* video area */}
        <div>
          <img src="../images/flower.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default YoutubeVideo;
