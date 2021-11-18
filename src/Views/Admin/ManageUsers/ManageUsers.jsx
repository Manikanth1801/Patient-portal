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
        var data = axios.get('http://localhost:8000/user');
        console.log("data ==== ", data);
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