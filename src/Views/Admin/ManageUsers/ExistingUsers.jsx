import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

import './ManageUsers.css';

class ExistingUsers extends Component {
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
        // console.log("date is", newDate)
        // if(newDate === 'Invalid Dat'){
            var dt = newDate.getDate()
            var mt = newDate.getMonth()
            var yr = newDate.getFullYear()
            return `${dt}/${mt}/${yr}`
        // }
    }
    activateDeactivate(e, status, userId){
        let postData
        // debugger;
        if(status === 'activate'){
            console.log("activateAccount ")
            e.target.classList.remove('active-btn')
            e.target.classList.add('deactive-btn')
            e.target.innerText = 'Deactivate'
            postData = {
                isRegistered: true
            }
        }
        else {
            console.log("deactivateAccount ")
            e.target.classList.remove('deactive-btn')
            e.target.classList.add('active-btn')
            e.target.innerText = 'Activate'
            postData = {
                isRegistered: false
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
                <Table bordered responsive>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>User Role</th>
                            <th>email_ID</th>
                            <th>Registration Date</th>
                            <th>Active(Y/N)</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { userData && userData.map((user, index) => (
                            user.isApproved &&
                        <tr key={index}>
                            <td>{user.firstname} {user.lastname}</td>
                            <td>{user.role}</td>
                            <td>{user.email}</td>
                            <td>{this.getOnlyDate(user.registrationDate)}</td>
                            <td>{user.isRegistered ? 'Y' : 'N'}</td>
                            <td>
                                { user.isRegistered ? 
                                <div className="common-btn deactive-btn" onClick={(e) => this.activateDeactivate(e, 'deactivate', user.id)}>Deactivate</div> : 
                                <div className="common-btn active-btn" onClick={(e) => this.activateDeactivate(e, 'activate', user.id)}>Activate</div> 
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

export default ExistingUsers