import React from "react";
import "./projectList.css";
import Project from "../project/Project";
import { projects } from "../../data";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Corrz</h1>
        <p className="pl-desc">
          This unique and memorable approach grabs the visitor’s attention,
          almost daring them to click through to see more. The top left features
          just his name — the only thing on the page. Once you click his name,
          two links show up – Works and About.
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}

        {/* <Project />
        <Project />
        <Project />
        <Project />
        <Project /> */}
      </div>
    </div>
  );
};

export default ProjectList;
