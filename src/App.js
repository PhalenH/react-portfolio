import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import PageDisplay from "./components/PageDisplay";

function App() {
  const [currentPage, setCurrentPage] = useState("AboutMe");
  return (
    <div>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <PageDisplay currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
