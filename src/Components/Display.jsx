import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from './Common/SideBar';

const sidebar = [
    {
      page: "Patient",
      properties:[
        {
        dashboard: "Dashboard",
        myProfile: "My Profile",
        scheduleAppointment: "Schedule Appointment",
        appointmentHistory: "Appointment History",
        demographics: "Demographics",
        medicationAllergies: "Medication and Allergies",
        immunizationDetails: "Immunization Details",
        patientVitals: "Patient Vitals",
        order: "Order",
        patientEducation: "Patient Education",
      }
    ]
    },
    {
      page: "Physician",
      properties:[
        {
        dashboard: "Dashboard",
        patientDetails: "Patient details",
      }
    ]
    },
    {
      page: "Admin",
      properties:[
        {
        dashboard: "Dashboard",
        managePatientRecord: "Manage Patient Records",
        managePhysicianRecord:"Manage physician Records",
        manageAppointment:"Manage Appointment",
        billing: "Billing",
      }
    ]
    },
    
  ]
export default function Display() {
    return (
        <div className = "col-12">
          {/* <div>
          <SideBar/> 
          </div> */}
          
            {sidebar.map((item,index)=>{
                return <ul>
                    <SideBar key = {index} sidebar = {item} />
                </ul>
            })}
            {/* <SideBar sidebar= {sidebar} /> */}
        </div>
    )
}
