// import React, { Component } from "react";
// import {
//   MenuItem,
//   IconButton,
//   Button,
//   Typography,
//   Toolbar,
//   Box,
//   AppBar,
//   Badge,
//   Menu,
// } from "@mui/material";
// // import {NotificationsIcon, AccountCircle} from '@mui/icons-material';
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// class Header extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       anchorEl: null,
//       isMenuOpen: null
//     };
//     this.menuId = "primary-search-account-menu";
//     this.renderMenu = (
//       <Menu
//         anchorEl={this.state.anchorEl}
//         anchorOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//         id={this.menuId}
//         keepMounted
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//         open={this.state.isMenuOpen}
//         onClose={this.handleMenuClose}
//       >
//         <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
//         <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
//       </Menu>
//     );
//   }
//   handleProfileMenuOpen = (event) => {
//     this.setState({ ...this.state, anchorEl: event.currentTarget, isMenuOpen: Boolean( event.currentTarget)});
//   };

//   render() {
//     return (
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//             ></IconButton>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               WelCome to Admin
//             </Typography>
//             <MenuItem>
//               <IconButton
//                 size="large"
//                 aria-label="show 17 new notifications"
//                 color="inherit"
//               >
//                 <Badge badgeContent={17} color="error">
//                   <NotificationsIcon />
//                 </Badge>
//               </IconButton>
//               {/* <p>Notifications</p> */}
//             </MenuItem>
//             <MenuItem onClick={this.handleProfileMenuOpen}>
//               <IconButton
//                 size="large"
//                 edge="end"
//                 aria-label="account of current user"
//                 aria-controls={this.menuId}
//                 aria-haspopup="true"
//                 color="inherit"
//               >
//                 <AccountCircleIcon />
//               </IconButton>
//               {/* <p>Profile</p> */}
//             </MenuItem>
//           </Toolbar>
//         </AppBar>
//         {this.renderMenu}
//       </Box>
//     );
//   }
// }

// export default Header;

import {
  faBell,
  faHamburger,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      isOpen: false,
    };
  }

  toggleDropdown() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  menuButtonClick = (ev) => {
    ev.preventDefault();
    this.onSetOpen(!this.state.open);
  };
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <FontAwesomeIcon
              icon={faHamburger}
              onClick={(e) => this.menuButtonClick(e)}
            ></FontAwesomeIcon>
            <img src="/CTLogo.jpg" width="200px"></img>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="userBell">
                <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
              </NavItem>
              <NavItem>
                <Dropdown
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggleDropdown}
                >
                  <DropdownToggle className="userMenu user p-0">
                    <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>My profile</DropdownItem>

                    <DropdownItem>Sign Out</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
