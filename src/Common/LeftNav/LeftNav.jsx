// import React, { Component } from "react";


// import "./LeftNav.css";

// class LeftNav extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//   }

//   render() {
//     return (
//       <div className="sidebar">
//         <div className="sidebar_brand">
//           <h1>Patient-Portal</h1>
//         </div>
//         <div className="sidebar_menu">
//           <ul>
//             <li>
//               <a href="">
//                 <span className="active"></span> <span>Dashboard</span>
//               </a>
//             </li>
//             <li>
//               <a href="">
//                 <span className=""></span> <span>My Profile</span>
//               </a>
//             </li>
//             <li>
//               <a href="">
//                 <span className=""></span> <span>Schedule Appointment</span>
//               </a>
//             </li>
//             <li>
//               <a href="">
//                 <span className=""></span> <span>Appointment History</span>
//               </a>
//             </li>
//             <li>
//               <a href="">
//                 <span className=""></span> <span>Demographics</span>
//               </a>
//             </li>
//             <li>
//               <a href="">
//                 <span className=""></span> <span>Medication and Allergies</span>
//               </a>
//             </li>
//             <li>
//               <a href="">
//                 <span className=""></span> <span>Immunization details</span>
//               </a>
//             </li>
//             <li>
//               <a href="">
//                 <span className=""></span> <span>Patient Vitals</span>
//               </a>
//             </li>
//             <li>
//               <a href="">
//                 <span className=""></span> <span>Order</span>
//               </a>
//             </li>
//             <li>
//               <a href="">
//                 <span className=""></span> <span>Patient Education</span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default LeftNav;

// import React from "react";
// import Sidebar from "react-sidebar";
 
// class LeftNav extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sidebarOpen: true
//     };
//     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
//   }
 
//   onSetSidebarOpen(open) {
//     this.setState({ sidebarOpen: open });
//   }
 
//   render() {
//     return (
//       <Sidebar
//         sidebar={<b>Sidebar content</b>}
//         open={this.state.sidebarOpen}
//         onSetOpen={this.onSetSidebarOpen}
//         styles={{ sidebar: { background: "white" } }}
//       >
//         <button onClick={() => this.onSetSidebarOpen(true)}>
//           Open sidebar
//         </button>
//       </Sidebar>
//     );
//   }
// }
 
// export default LeftNav;
//Responsive sidebar
//A common use case for a sidebar is to show it automatically when there is enough screen width available. This can be achieved using media queries via window.matchMedia. This again has to be integrated into the parent component so you can use the information to make changes to the sidebar and main content.

import React from "react";
import Sidebar from "react-sidebar";

const style ={
    root: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: "hidden"
    },
    sidebar: {
      zIndex: 2,
      position: "absolute",
      top: 0,
      bottom: 0,
      transition: "transform .3s ease-out",
      WebkitTransition: "-webkit-transform .3s ease-out",
      willChange: "transform",
      overflowY: "auto"
    },
    content: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflowY: "auto",
      WebkitOverflowScrolling: "touch",
      transition: "left .3s ease-out, right .3s ease-out"
    },
    overlay: {
      zIndex: 1,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0,
      visibility: "hidden",
      transition: "opacity .3s ease-out, visibility .3s ease-out",
      backgroundColor: "rgba(0,0,0,.3)"
    },
    dragHandle: {
      zIndex: 1,
      position: "fixed",
      top: 0,
      bottom: 0
    }
  };
 
const mql = window.matchMedia(`(min-width: 800px)`);
 
class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };
 
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }
 
  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
 
  render() {
    return (
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
        styles={style}
      >
        <b>Main content</b>
      </Sidebar>
    );
  }
}
export default LeftNav;