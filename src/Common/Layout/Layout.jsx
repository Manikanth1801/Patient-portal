

import React, { useRef } from "react";
import { useLocation } from "react-router";
import Routes from "../../Router/Routes";
import Footer from "../Footer/Footer";
import Header from "./../Header/Header";
import LeftNav from "./../LeftNav/LeftNav";
import "./Layout.css";

const LayoutComponent = () => {
  const sidebarEl = useRef(null);
  const location = useLocation();
  const showHeader =
    location.pathname.includes("patient") ||
    location.pathname.includes("admin") ||
    location.pathname.includes("physician");
  const openSidebar = (val) => {
    sidebarEl.current.style.display = val ? "block" : "none";
  };

  localStorage.setItem("authToken", "12345");
  // return (
  //   <div className="Ap">
  //     {showHeader && (
  //       <>
  //         <Header />
  //         <LeftNav />
  //       </>
  //     )}
  //     <div style={{ float: "left" }}>
  //       <Routes />
  //     </div>
  //     {showHeader && <Footer />}
  //     {/* </div> */}
  //   </div>
  // );
  return (
    <div>
      {showHeader && (
        <div id="header">
          <Header openSideBar={(val) => openSidebar(val)} />
        </div>
      )}
      <div id="app-container">
        {showHeader && (
          <div id="sidebar" ref={sidebarEl}>
            <LeftNav />
          </div>
        )}
        <div id="main-contain" style={{marginLeft:"auto",marginRight:"auto"}}>
          <Routes />
        </div>
      </div>
      {showHeader && (
        <div id="footer">
          <Footer/>
        </div>
      )}
    </div>
  );
};

export default LayoutComponent;
