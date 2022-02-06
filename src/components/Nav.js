import React from "react";
import "../styles/nav.css"

export default function Nav({ currentPage, setCurrentPage }) {
  return (
  <nav>
    <div className="nav-container">
      <h1 className="navName">Phalen Hazel</h1>
      <div className="line"></div>
      <a
        href="#1"
        onClick={() => setCurrentPage("AboutMe")}
        id={currentPage === "AboutMe" ? "active-page" : "nav-anchor"}
      >
        About Me
      </a>

      <a
        href="#1"
        onClick={() => setCurrentPage("Projects")}
        id={currentPage === "Projects" ? "active-page" : "nav-anchor"}
      >
        Projects
      </a>

      <a
        href="#1"
        onClick={() => setCurrentPage("Contact")}
        id={currentPage === "Contact" ? "active-page" : "nav-anchor"}
      >
        Contact
      </a>

      <a
        href="#1"
        onClick={() => setCurrentPage("Resume")}
       id={currentPage === "Resume" ? "active-page" : "nav-anchor"}
      >
        Resume
      </a>
    </div>
  </nav>
  )
}
