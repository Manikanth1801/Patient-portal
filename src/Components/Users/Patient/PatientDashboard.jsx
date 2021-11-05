import React from 'react'
import { Link } from 'react-router-dom'

export default function PatientDashboard() {
    return (
        <div className="col-md-2" id="wrapper">
      <div className="border-end bg-white" id="sidebar-wrapper">
        {/* <div className="sidebar-heading border-bottom bg-light">
            Patient Name
        </div> */}
        <div className="list-group list-group-flush">
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="patient/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to=""
          >
            My Profile
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to=" "
          >
            Schedule Appointment
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to=" "
          >
            Appointment History
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to=" "
          >
            Demographics
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to=" "
          >
            Medications and Allergies
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to=" "
          >
            Immunization Details
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to=" "
          >
            Patient Vitals
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to=" "
          >
            Order
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to=" "
          >
            Patient Education
          </Link>
        </div>
      </div>
      </div>
    )
}
