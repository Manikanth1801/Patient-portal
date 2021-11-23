import React, { Component } from 'react';
// import LeftNav from '../../../Common/LeftNav/LeftNav';
// import {Button} from 'reactstrap';
import './AdminDashboard.css';
// import ManageUsers from '../ManageUsers/ManageUsers';
import { Link } from 'react-router-dom';

class AdminDashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>This is Admin Dashboard page</h1>
                {/* <LeftNav menuType="patient"/> */}
                
                <Link to="/admin/manageUsers" className="manage-users-btn">Manage Users</Link>
                {/* <ManageUsers></ManageUsers> */}
            </div>
        )
    }
}

export default AdminDashboard