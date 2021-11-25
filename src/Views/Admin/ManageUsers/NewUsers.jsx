import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

import './ManageUsers.css';

class NewUsers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userData: [],
            newUsersCount: 0
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

        this.countNewUsers()
    }

    countNewUsers(){
        let userdata = this.state.userData
        for(let i = 0; i < userdata.length; i++) {
            if(userdata[i].isApproved === false){
                this.setState({ newUsersCount: this.state.newUsersCount + 1 })
            }
        }
    }

    getOnlyDate(thisdate){
        var newDate = new Date(thisdate)
        // console.log("date is", newDate)
        // if(newDate === 'Invalid Dat'){
            var dt = newDate.getDate()
            var mt = newDate.getMonth()
            var yr = newDate.getFullYear()
            return `${dt}/${mt}/${yr}`
        // }
    }
    approveUser(e, status, userId){
        // debugger;
        let postData
        if(status == false){
            postData = {
                isApproved: true
            }
        } else {
            postData = {
                isApproved: false
            }
        }
        let token = localStorage.getItem('accessToken')
        if(token){
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}` 
        }
        axios.patch(`http://localhost:8000/users/${userId}`, postData)
        .then(res => {
            let newdata = this.state.userData
            for(let i = 0; i < newdata.length; i++) {
                if(newdata[i].id === userId){
                    newdata[i] = res.data;
                    break
                }
            }
            this.setState({userData: newdata})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        const userData = this.state.userData
        return (
            <div>
                { this.state.newUsersCount > 0 ?
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
                            user.isApproved === false &&
                            <tr key={index}>
                                <td>{user.firstname} {user.lastname}</td>
                                <td>{user.role}</td>
                                <td>{user.email}</td>
                                <td>{this.getOnlyDate(user.registrationDate)}</td>
                                <td>
                                    {/* { user.isApproved ? 
                                    'Approved' :  */}
                                    <div className="common-btn" onClick={(e) => this.approveUser(e, user.isApproved, user.id)}>Approve</div> 
                                    {/* } */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table> : 
                <div className="no-records">No new records available</div>
                }
            </div>
        )
    }
}

export default NewUsers