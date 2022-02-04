import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Nav from "./Nav";
import Footer from "./footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    } else if (currentPage === "Projects") {
      return <Projects />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    } else if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  return (
    <div>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* call renderPage to render a component */}
      {renderPage()}
      <Footer />
    </div>
  );
}
