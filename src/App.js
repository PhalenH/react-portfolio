import React, {useEffect} from "react";
import "./styles/App.css";
import PortfolioContainer from "./components/PortfolioContainer";


function App() {
  useEffect(() => {
    document.querySelector("#root").classList.add("container")
  }, [])
  return <PortfolioContainer />
}

export default App;
