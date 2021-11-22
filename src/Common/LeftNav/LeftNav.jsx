import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./LeftNav.css";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
//new
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {open:props.open,
      drawerWidth:props.drawerWidth,
      handleDrawerClose:props.handleDrawerClose,
      theme:props.theme,};
    this.module =
      (this.props.location.pathname.includes("/patient/") && "patient") ||
      (this.props.location.pathname.includes("/admin/") && "admin") ||
      (this.props.location.pathname.includes("/physician/") && "physician");

    this.patientMenu = [
      { name: "Dashboard", link: "/patient/dashboard" },
      { name: "My Profile", link: "/patient/profile" },
      { name: "Schedule Appointment", link: "/patient/scheduleAppointment" },
      { name: "Appointment History", link: "/patient/appointment_history" },
      { name: "Demographics", link: "/patient/demographics" },
      { name: "PatientVitals", link: "/patient/patientVitals" },
      { name: "Immunization", link: "/patient/immunization" },
      { name: "Medication Allergies", link: "/patient/medcication_Allergies" },
      { name: "Billing Details", link: "/patient/billingDetails" },
      { name: "Wallet", link: "/patient/wallet" },
    ];
    this.adminMenu = [
      { name: "Dashboard", link: "/admin/dashboard" },
      { name: "Patient Records", link: "/admin/patientRecords" },
      { name: "Physician Records", link: "/admin/physicianRecords" },
      { name: "Manage Users", link: "/admin/manageUsers" },
      { name: "Billing Data", link: "/admin/billingData" },
    ];
    this.physicianMenu = [
      { name: "Physician Dashboard", link: "/physician/dashboard" },
      { name: "Patient Details", link: "/physician/patientDetails" },
      { name: "Physician Profile", link: "/physician/physicianProfile" },
    ];
    this.menu =
      this.module === "patient"
        ? this.patientMenu
        : this.module === "admin"
        ? this.adminMenu
        : this.module === "physician"
        ? this.physicianMenu
        : [];
  }

  render() {
    return (
      // <div className="sidebar" style={{float:'left'}}>
      //   <div className="sidebar_menu">
      //     <ul>
      //       {this.menu.map((menuItem) => {
      //         return (
      //           <li
      //             className={classNames(
      //               "menuItem",
      //               this.props.location.pathname.includes(menuItem.link) &&
      //                 "active"
      //             )}
      //             key={menuItem.link}
      //           >
      //             <Link to={menuItem.link}>{menuItem.name}</Link>
      //           </li>
      //         );
      //       })}
      //     </ul>
      //   </div>
      // </div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          {this.menus.map(({ menu, link }, index) => (
            <Link to={link} key={menu}>
              <ListItem button>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={menu} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    );
  }
 
}

export default withRouter(LeftNav);

import { styled } from "@mui/material/styles";


export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
