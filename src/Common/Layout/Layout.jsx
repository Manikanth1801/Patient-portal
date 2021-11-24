// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";

// import SidebarComponent from './sidebar/Sidebar';
// import NavbarComponent from './navbar/Navbar';
// import {DrawerHeader} from './drawer-header/DrawerHeader';

// const drawerWidth = 240;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   })
// );

// export default function Layout({menus, children}) {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <NavbarComponent
//         position="fixed"
//         open={open}
//         handleDrawerOpen={handleDrawerOpen}
//         drawerWidth={drawerWidth}
//       />
//       <SidebarComponent
//         open={open}
//         drawerWidth={drawerWidth}
//         handleDrawerClose={handleDrawerClose}
//         theme={theme}
//         menus={menus}
//       />
//       <Main open={open}>
//         <DrawerHeader />
//         {children}
//       </Main>
//     </Box>
//   );
// }

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
          <Footer />
        </div>
      )}
    </div>
  );
};

export default LayoutComponent;
