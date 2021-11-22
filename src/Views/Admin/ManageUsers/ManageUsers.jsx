import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

class ManageUsers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8000/users")
        .then(res => {
        console.log("Test data checked is",res)
        })
        .catch(err => {
        console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h4>Manage Users</h4>
                <Table bordered responsive>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>User Role</th>
                            <th>email_ID</th>
                            <th>Registration Date</th>
                            <th>Active(Y/N)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Software Engineer</td>
                            <td>@mdo</td>
                            <td>11/11/2021</td>
                            <td>Y</td>
                        </tr>
                        <tr>
                            <td>Mark</td>
                            <td>Software Engineer</td>
                            <td>@mdo</td>
                            <td>11/11/2021</td>
                            <td>Y</td>
                        </tr>
                        <tr>
                            <td>Mark</td>
                            <td>Software Engineer</td>
                            <td>@mdo</td>
                            <td>11/11/2021</td>
                            <td>Y</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ManageUsers