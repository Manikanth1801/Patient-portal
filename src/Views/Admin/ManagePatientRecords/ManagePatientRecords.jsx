import React, { Component } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('First Name', 'Sushma'),
    createData('Last Name', 'Jalli'),
    createData('DOB', '22/11/2021'),
    createData('Gender', 'Female'),
    createData('Ethinicity', 'Asia'),
  ];
class ManagePatientRecords extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    

    render() {
        return (
            <div>
                <h4>Patient Demographics</h4>
                <div className="common-btn">Edit</div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        {/* <TableHead>
                        <TableRow>
                            <TableCell>TITLE</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            
                        </TableRow>
                        </TableHead> */}
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.calories}</TableCell>
                                {/* <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell> */}
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

export default ManagePatientRecords