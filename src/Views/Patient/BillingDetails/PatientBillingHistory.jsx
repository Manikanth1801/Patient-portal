import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { GridPDFExport } from '@progress/kendo-react-pdf';
import { BillingData } from './PatientBillingData.js';
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

export default class PatientBillingHistory extends React.Component {



      
  total = BillingData.length;
  // pageSize = BillingData.length;
  pageSize = 10;

  state = {
    data: BillingData.slice(0, this.pageSize),
  };
  scrollHandler = (event) => {
    const e = event.nativeEvent;

    if (
      e.target.scrollTop + 10 >=
      e.target.scrollHeight - e.target.clientHeight
    ) {
      const moreData = BillingData.splice(0, 5);

      // if (moreData.length > 0) {
      //   this.setState({
      //     BillingData: this.state.BillingData.concat(moreData),
      //   });
      // }
    }
  };


  render() {
   
    const grid =<Grid
    style={{
    // width:"98%",
    height:"500px",
    //   position: "relative",
    // margin:"auto",
        fontSize:"16px"
    }}

    data={filterBy(BillingData, this.state.filter)}
    filterable={true}
    filter={this.state.filter}
    onFilterChange={(e) => {
      this.setState({
        filter: e.filter,
      });
    }}
    onScroll={this.scrollHandler}
    fixedScroll={true}
  >
<GridToolbar>
<Card style={{position: "absolute", padding:"10px", fontSize:"15px",right:"10px"}} title="Export PDF" className="k-button k-primary" onClick={this.exportPDF} disabled={this.state.exporting}>
Download as PDF
</Card>
</GridToolbar>

    {/* <Column field="ProductID" title="No" filterable={false} width="60px" headerCell={ProductNameHeader}/> */}

    <Column
      field="transactionId"
    width="120px"
      title="Bill ID"
      headerCell={ProductNameHeader}
    />
        <Column
      field="userName"
    width="160px"
      title="Sender"
      headerCell={ProductNameHeader}
    />
    <Column
      field="billingType"
    width="180px"
    //   filter="date"
      title="Paid for"
      headerCell={ProductNameHeader}
    />

    <Column
      field="billingDate"
    width="190px"
      title="Date of Billing"
      headerCell={ProductNameHeader}
    />
    <Column field="billingAmount" 
    title="Amount (&#8377;)"
    width="180px"
    headerCell={ProductNameHeader}
    />

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
			<CardTitle tag="h2" style={{ textAlign: 'center'}}>
			My Billing History
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
      data: BillingData.slice(skip, skip + take),
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