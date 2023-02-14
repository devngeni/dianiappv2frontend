import React from "react";
import "./css/miniloader.css"

const MiniLoader = (props) => {
  return (
      <div className="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
  );
};

export default MiniLoader;