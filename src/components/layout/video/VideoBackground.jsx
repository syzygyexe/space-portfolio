import React from "react";

const VideoBackground = ({ src, preload = "true" }) => {
  return (
    <video
      src={src}
      preload={preload}
      autoPlay
      muted
      loop
      className='vid'
    ></video>
  );
};

export default VideoBackground;
