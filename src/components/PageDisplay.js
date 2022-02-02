import React from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";

export default function PageDisplay({ currentPage }) {
  if (currentPage === "AboutMe") {
    return <AboutMe />;
  } else if (currentPage === "Projects") {
    return <Projects />;
  } else if (currentPage === "Contact") {
    return <Contact />;
  } else if (currentPage === "Resume") {
    return <Resume />;
  }
}

