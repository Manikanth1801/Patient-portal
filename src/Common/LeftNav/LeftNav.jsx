import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LeftNav.css";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import {
  faAllergies,
  faClock,
  faDemocrat,
  faHandshake,
  faHandshakeSlash,
  faHistory,
  faHome,
  faMedkit,
  faMoneyBill,
  faMoneyBillAlt,
  faPenNib,
  faReceipt,
  faRecordVinyl,
  faSyringe,
  faTimesCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.module =
      (this.props.location.pathname.includes("/patient/") && "patient") ||
      (this.props.location.pathname.includes("/admin/") && "admin") ||
      (this.props.location.pathname.includes("/physician/") && "physician");

    this.patientMenu = [
      {
        name: "Dashboard",
        link: "/patient/dashboard",
        icon: <FontAwesomeIcon icon={faHome} title="Dashboard" />,
      },
      {
        name: "My Profile",
        link: "/patient/patientInfo",
        icon: <FontAwesomeIcon icon={faUser} title="My Profile" />,
      },
      {
        name: "Schedule Appointment",
        link: "/patient/scheduleAppointment",
        icon: <FontAwesomeIcon icon={faClock} title="Schedule Appointment" />,
      },
      {
        name: "Appointment History",
        link: "/patient/appointment_history",
        icon: <FontAwesomeIcon icon={faHistory} title="Appointment History" />,
      },

      {
        name: "Patient Vitals",
        link: "/patient/patientVitals",
        icon: <FontAwesomeIcon icon={faMedkit} title="Patient Vitals" />,
      },
      {
        name: "Immunization",
        link: "/patient/immunization",
        icon: <FontAwesomeIcon icon={faSyringe} title="Immunization" />,
      },
      {
        name: "Medication Allergies",
        link: "/patient/medcication_Allergies",
        icon: <FontAwesomeIcon icon={faAllergies} title="Medical Allergies" />,
      },
      {
        name: "Billing Details",
        link: "/patient/billingDetails",
        icon: <FontAwesomeIcon icon={faMoneyBill} title="Billing Details" />,
      },
    ];
    this.adminMenu = [
      {
        name: "Dashboard",
        link: "/admin/dashboard",
        icon: <FontAwesomeIcon icon={faHome} title="Dashboard" />,
      },
      {
        name: "Profile",
        link: "/admin/adminProfile",
        icon: <FontAwesomeIcon icon={faHome} title="Dashboard" />,
      },
      {
        name: "Patient Records",
        link: "/admin/patientRecords",
        icon: <FontAwesomeIcon icon={faReceipt} title="Patient Records" />,
      },
      {
        name: "Physician Records",
        link: "/admin/physicianRecords",
        icon: <FontAwesomeIcon icon={faReceipt} title="Physician Records" />,
      },
      {
        name: "Manage Users",
        link: "/admin/manageUsers",
        icon: <FontAwesomeIcon icon={faHandshake} title="Manage Users" />,
      },
      {
        name: "Master Data",
        link: "/admin/masterData",
        icon: <FontAwesomeIcon icon={faHandshake} title="Master Data" />,
      },
      {
        name: "Billing Data",
        link: "/admin/billingData",
        icon: <FontAwesomeIcon icon={faMoneyBillAlt} title="Billing Data" />,
      },
    ];
    this.physicianMenu = [
      {
        name: "Dashboard",
        link: "/physician/dashboard",
        icon: <FontAwesomeIcon icon={faHome} title="Dashboard" />,
      },
      {
        name: "Profile",
        link: "/physician/profile",
        icon: <FontAwesomeIcon icon={faUser} title="Profile" />,
      },
      {
        name: "Patient Details",
        link: "/physician/patientDetails",
        icon: <FontAwesomeIcon icon={faReceipt} title="Patient Details" />,
      },
      {
        name: "Join Appointment",
        link: "/physician/joinAppointment",
        icon: <FontAwesomeIcon icon={faClock} title="Join Appointment" />,
      },
      {
        name: "Appointment History",
        link: "/physician/appointmentHistory",
        icon: <FontAwesomeIcon icon={faHistory} title="Appointment History" />,
      },
      {
        name: "Prescription",
        link: "/physician/Prescription",
        icon: <FontAwesomeIcon icon={faPenNib} title="Prescription" />,
      },
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
      <>
      <div className="sidebar" style={{ float: "left" }}>
        <div className="sidebar_menu">
          <ul>
            {this.menu.map((menuItem) => {
              return (
                <li
                  className={classNames(
                    "menuItem",
                    this.props.location.pathname.includes(menuItem.link) &&
                      "active"
                  )}
                  key={menuItem.link}
                >
                  <Link to={menuItem.link}>
                    <span className="leftNavIcon">{menuItem.icon}</span>
                    {menuItem.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      
      </>
      
    );
  }
}

export default withRouter(LeftNav);
