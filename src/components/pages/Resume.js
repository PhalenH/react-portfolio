import React from "react";
import "../../styles/resume.css"
import Pdf from "../../assets/Resume.pdf";

export default function Resume() {
  return (
    <div className="resume-container">
      <h2>Resume</h2>
      <a href= {Pdf} target="_blank">
          <p id="icon-text">View my Resume</p>
      </a>
      <ul>
        {" "}
        Front-end Proficiencies
        <li>HTML</li>
        <li>CSS</li>
        <li>JacaScript</li>
        <li>Boostrap</li>
        <li>jQuery</li>
        <li>React</li>
      </ul>
      <ul>
        {" "}
        Front-end Proficiencies
        <li>Node</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>REST</li>
        <li>APIs</li>
      </ul>
    </div>
  );
}
