import React from "react";
import "./App.css";
import Routes from "./Router/Routes";
import { useLocation } from "react-router-dom";
import LeftNav from "./Common/LeftNav/LeftNav";
import Footer from "./Common/Footer/Footer";
import { dividerClasses } from "@mui/material";
import LayoutComponent from "./Common/Layout/Layout"

function App() {
  return(
    <div>
      <LayoutComponent />
      {/* <Routes /> */}
    </div>
  )
}


export default App;
