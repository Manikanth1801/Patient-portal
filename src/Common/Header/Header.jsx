import { faBars, faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
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
import { withRouter } from "react-router";
import CtLogo from "../../Assets/Images/CtLogo";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.module =
      (this.props.location.pathname.includes("/patient/") && "patient") ||
      (this.props.location.pathname.includes("/admin/") && "admin") ||
      (this.props.location.pathname.includes("/physician/") && "physician");

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      isOpen: false,
      isSideBarOpen: false,
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
  expandSideBar = (ev) =>{
    ev.preventDefault();
    this.setState({
      isSideBarOpen: !this.state.isSideBarOpen
      
    })
    
    this.props.openSideBar(this.state.isSideBarOpen);


  }

  render() {
    return (
      <div>
        <Navbar expand="md" className="header">
          <NavbarBrand>
            <div className="d-flex">
             <div className="header-drawer">
              <FontAwesomeIcon icon={faBars} onClick={(ev)=>this.expandSideBar(ev)} />
              <CtLogo />
              </div>
              {/* <img src="/CTLogo.jpg" height="34px"></img> */}
              {/* <h2 className="pl-2" style={{color:"white"}}>
                WelCome to <span style={{textTransform:'capitalize'}}>{this.module}</span>
              </h2> */}
            </div>
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse  isOpen={this.state.isOpen} navbar>
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
                  <DropdownMenu end>
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

export default withRouter(Header);


