import React from "react";

export default function Nav({ setCurrentPage }) {
  return (
    <nav>
      <div className="nav-container">
        <h2 onClick={() => setCurrentPage("AboutMe")}>About Me</h2>
        <h2 onClick={() => setCurrentPage("Projects")}>Projects</h2>
        <h2 onClick={() => setCurrentPage("Contact")}>Contact</h2>
        <h2 onClick={() => setCurrentPage("Resume")}>Resume</h2>
      </div>
    </nav>
  );
}
