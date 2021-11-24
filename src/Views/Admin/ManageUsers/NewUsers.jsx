import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

import './ManageUsers.css';

class NewUsers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userData: []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8000/users")
        .then(res => {
        console.log("Test data checked is",res.data)
            this.setState({userData: res.data})
        })
        .catch(err => {
        console.log(err)
        })
    }

    getOnlyDate(thisdate){
        var newDate = new Date(thisdate)
        console.log("date is", newDate)
        // if(newDate === 'Invalid Dat'){
            var dt = newDate.getDate()
            var mt = newDate.getMonth()
            var yr = newDate.getFullYear()
            return `${dt}/${mt}/${yr}`
        // }
    }
    approveUser(e){
        e.target.innerText = 'Approved'
    }

    render() {
        const userData = this.state.userData
        return (
            <div>
                <Table bordered responsive>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>User Role</th>
                            <th>email_ID</th>
                            <th>Registration Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        { userData && userData.map((user, index) => (
                        <tr key={index}>
                            <td>{user.firstname} {user.lastname}</td>
                            <td>{user.role}</td>
                            <td>{user.email}</td>
                            <td>{this.getOnlyDate(user.registrationDate)}</td>
                            <td>
                                { user.isApproved ? 
                                'Approved' : 
                                <div className="common-btn" onClick={(e) => this.approveUser(e)}>Approve</div> 
                                }
                            </td>
                        </tr>
                        ))}
                        
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default NewUsers