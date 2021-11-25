import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
// import {specialization} from './MasterDataList';

// import './ManageUsers.css';

class MasterData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            masterData: []
        }
    }

    componentDidMount(){
        this.getMasterData()
        // console.log("specialization   ", specialization);
    }

    getMasterData(){
        axios.get("http://localhost:8000/lookups")
        .then(res => {
        console.log("Test data checked is",res)
            this.setState({masterData: res.data})
        })
        .catch(err => {
        console.log(err)
        })
    }

    deleteRecored(e, recordId){
        // e.target.innerText = 'Approved'
        // specialization[0];
        axios.delete(`http://localhost:8000/lookups/${recordId}`)
        .then(res => {
            console.log("deleteRecored === ",res)
            this.getMasterData()
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        const masterData = this.state.masterData
        return (
            <div>
                <h5>Specialization</h5>
                <div className="usersData-tbl">
                <Table bordered responsive>
                    <tbody>
                        { masterData && masterData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.name}</td>
                            <td className="text-right">
                                <i className="far fa-trash-alt" onClick={(e) => this.deleteRecored(e, data.id)}></i>
                                {/* <i className="far fa-edit"></i>
                                <i className="fas fa-plus"></i> */}
                            </td>
                        </tr>
                        ))}
                        
                    </tbody>
                </Table>
                </div>
            </div>
        )
    }
}

export default MasterData