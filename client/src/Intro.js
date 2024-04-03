import React from "react";
import CoverImg from "./img/fin.jpg";

import "./2124880.css";

const Blankpage = () => {
  return (
    <div className="blank">
      <div className="wallpaper">
        <img className="blank-img" src={CoverImg} alt="Coverimg" />
        <div className="text-container">
          <h1>Welcome To Ripple X</h1>
          <h4>Future is Here</h4>
        </div>
      </div>
    </div>
  );
};

export default Blankpage;
