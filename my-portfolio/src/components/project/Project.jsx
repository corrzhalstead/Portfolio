import React from "react";
import "./project.css";
import img from "../../images/projects/bidpro/BidPro1.png";

const Project = () => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href="http" target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-image" />
      </a>
    </div>
  );
};

export default Project;
