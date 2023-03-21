import React from "react";
import ReactPlayer from "react-player/youtube";

const VodCard = (props) => {
 
  return (
    <div className="w-full player-wrapper">
      <ReactPlayer
        url={
          "https://www.youtube.com/" +
          props.link +
          "?showinfo=0&enablejsapi=1&origin=http://localhost:3000"
        }
        className="overflow-hidden rounded-xl"
        controls
        playIcon="true"
        width="100%"
        config={{
          youtube: { playerVars: { origin: "https://www.youtube.com" } },
        }}
      />
    </div>
  );
};

export default VodCard;
