import React from 'react'
import"./Sidebar.css"
function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar_brand">
                <h1>Patient-Portal</h1>
            </div>
            <div className="sidebar_menu">
                <ul>
                    <li>
                        <a href=""><span className="active"></span> <span>Dashboard</span></a>
                    </li>
                    <li>
                        <a href=""><span className=""></span> <span>My Profile</span></a>
                    </li>
                    <li>
                        <a href=""><span className=""></span> <span>Schedule Appointment</span></a>
                    </li>
                    <li>
                        <a href=""><span className=""></span> <span>Appointment History</span></a>
                    </li>
                    <li>
                        <a href=""><span className=""></span> <span>Demographics</span></a>
                    </li>
                    <li>
                        <a href=""><span className=""></span> <span>Medication and Allergies</span></a>
                    </li>
                    <li>
                        <a href=""><span className=""></span> <span>Immunization details</span></a>
                    </li>
                    <li>
                        <a href=""><span className=""></span> <span>Patient Vitals</span></a>
                    </li>
                    <li>
                        <a href=""><span className=""></span> <span>Order</span></a>
                    </li>
                    <li>
                        <a href=""><span className=""></span> <span>Patient Education</span></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
 