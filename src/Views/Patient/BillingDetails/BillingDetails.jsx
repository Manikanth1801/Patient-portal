import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { GridPDFExport } from '@progress/kendo-react-pdf';
import { PatientBillingData } from './PatientBillingData';
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


export default class BillingDetails extends React.Component {

  // total = AppointmentData.length;
  // pageSize = 5
  state = {
    data: PatientBillingData.slice(0, this.pageSize),
    skip: 0,
  };
  pageChange = (event) => {
    this.setState({
      skip: event.page.skip,
    });
  };

 

  render() {

    const grid= <Grid
    style={{
      height: "500px",
      // overflow: "scroll",
      fontSize: "15px",
      // width:"100%"
      // margin:"auto"
    }}
    // rowHeight={40}
    data={filterBy(PatientBillingData, this.state.filter)}
    filterable={true}
    filter={this.state.filter}
    onFilterChange={(e) => {
      this.setState({
        filter: e.filter,
      });
    }}
    total={this.state.data.length}
    skip={this.state.skip}
    scrollable={"virtual"}
    onPageChange={this.pageChange}
  >
    <GridToolbar>
<Card style={{position: "absolute", padding:"10px", fontSize:"15px",right:"10px"}} title="Export PDF" className="k-button k-primary" onClick={this.exportPDF} disabled={this.state.exporting}>
Download as PDF
</Card>
</GridToolbar>
<Column
      field="id"
    width="100px"
      title="No."
      headerCell={ProductNameHeader}
    />
<Column
      field="transactionId"
    width="160px"
      title="Bill ID"
      headerCell={ProductNameHeader}
    />
        <Column
      field="userName"
    width="200px"
      title="Payed by"
      headerCell={ProductNameHeader}
    />
    <Column
      field="billingType"
    width="220px"
    //   filter="date"
      title="Paid for"
      headerCell={ProductNameHeader}
    />

    <Column
      field="billingDate"
    width="230px"
      title="Date of Billing"
      headerCell={ProductNameHeader}
    />
    <Column field="billingAmount" 
    title="Amount (&#8377;)"
    width="200px"
    headerCell={ProductNameHeader}
    />
    
  
  </Grid>
  
    return (
      <div>
        <Card
			body
			inverse
			style={{
			backgroundColor: '#04c0c1',
      borderColor: '#333',
      margin:"auto",
      padding:"5px",
      textAlign: 'center'  ,
    // width:"auto",      
			}}
			>
      			{/* <Card
			 style={{
				 backgroundColor: '#eef1f1',
				 borderColor: '#333',
				//  width:"80%",
				//  margin:"auto",
			   }}> */}
			<CardTitle tag="h2" style={{ textAlign: 'center'}}>
			My Billing History
			</CardTitle>
			</Card>
			<Card style={{backgroundColor: '#eef1f1',borderColor: '#333', }}>
    <div >
  {grid}
      <GridPDFExport ref={gridPDFExport}>
        {grid}
      </GridPDFExport>
      </div>
</Card>
      </div>
     
    );
  }

  pageChange = event => {
    this.setState(this.createState(event.page.skip, event.page.take));
  };

  createState(skip, take) {
    return {
      data: PatientBillingData.slice(skip, skip + take),
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