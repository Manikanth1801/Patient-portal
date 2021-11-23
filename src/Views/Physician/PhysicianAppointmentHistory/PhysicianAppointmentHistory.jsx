import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { GridPDFExport } from '@progress/kendo-react-pdf';
import { AppointmentData } from './PhysicianAppointmentData';
import { filterBy,orderBy } from '@progress/kendo-data-query';
// import './AppointmentHistory.css'

import {Card,CardTitle,CardText,CardColumns} from 'reactstrap'
const gridPDFExport = React.createRef();


class ProductNameHeader extends React.Component {
    render() {
      return (
          <span
            style={{
              fontWeight:"bold",
              fontSize:"16px",
            }}
          >
            {this.props.title}
          </span>
      );
    }
  }

export default class PhysicianAppointmentHistory extends React.Component {

      
  total = AppointmentData.length;
  pageSize = AppointmentData.length;
//   pageSize = 5;
  state = {
    data: AppointmentData.slice(0, this.pageSize),
    skip: 0,
    exporting: false
  };

  render() {
   
    const grid =<Grid
    style={{
        maxWidth:"1100px",
        height:"500px",
    //   position: "relative",
	// margin:"0 auto",
	margin:"auto",
        fontSize:"16px"
    }}

    data={filterBy(AppointmentData, this.state.filter)}
    filterable={true}
    filter={this.state.filter}
    onFilterChange={(e) => {
      this.setState({
        filter: e.filter,
      });
    }}

  >
<GridToolbar>
<Card style={{position: "absolute", padding:"10px", fontSize:"15px",right:"10px"}} title="Export PDF" className="k-button k-primary" onClick={this.exportPDF} disabled={this.state.exporting}>
Download as PDF
</Card>
</GridToolbar>

    {/* <Column field="ProductID" title="No" filterable={false} width="60px" headerCell={ProductNameHeader}/> */}

    <Column
      field="status"
    width="120px"
      title="Status"
      headerCell={ProductNameHeader}
    />
    <Column
      field="dateOfAppointment"
    width="130px"
    //   filter="date"
      title="Date"
      headerCell={ProductNameHeader}
    />

    <Column
      field="time"
    width="110px"
      title="Time"
      headerCell={ProductNameHeader}
    />
        <Column field="patientId" 
    title="Patient Id" 
    width="160px"
    headerCell={ProductNameHeader}
    />
    <Column field="patientName" 
    title="Patient Name" 
    width="150px"
    headerCell={ProductNameHeader}
    />
        <Column
      field="specilization"
    width="150px"
      title="Department"
      headerCell={ProductNameHeader}
    />
    <Column
      field="notes"
    width="200px"
      title="Prescriptions"
      headerCell={ProductNameHeader}
    />
    
    {/* <Column
      field="UnitPrice"
    width="180px"
      filter="numeric"
      format="{0:c}"
    />
    <Column field="Discontinued" 
    width="190px" 
    filter="boolean" /> */}

  </Grid>
    
    return (<div>
			<Card
			 body
			 inverse
			 style={{
				 backgroundColor: '#eef1f1',
				 borderColor: '#333',
				//  width:"80%",
				 margin:"auto",
			   }}>
			<Card
			body
			inverse
			style={{
			backgroundColor: '#04c0c1',
			borderColor: '#333',
			padding:"5px",
			textAlign: 'center'        
			}}
			>
			<CardTitle tag="h2" style={{ textAlign: 'center',}}>
			My Appointment List
			</CardTitle>
			</Card>
			<Card style={{backgroundColor: '#eef1f1',borderColor: '#333'}}>
            {grid}
            <GridPDFExport ref={gridPDFExport}>
              {grid}
            </GridPDFExport>
			</Card>
			</Card>

          </div>)
  }

  pageChange = event => {
    this.setState(this.createState(event.page.skip, event.page.take));
  };

  createState(skip, take) {
    return {
      data: AppointmentData.slice(skip, skip + take),
      skip: skip
    };
  }

  exportPDF = () => {
    gridPDFExport.current.save(this.state.data, this.pdfExportDone);
    this.setState({
      exporting: true
    });
  };
  pdfExportDone = () => {
    this.setState({
      exporting: false
    });
  };
}