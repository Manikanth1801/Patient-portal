import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { GridPDFExport } from '@progress/kendo-react-pdf';
import { AppointmentData } from './PatientAppointmentData';
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

// export default class AppointmentHistory extends React.Component {

      
  // total = AppointmentData.length;
  // pageSize = 5
//   pageSize = 5;
//   state = {
//     data: AppointmentData.slice(0, this.pageSize),
//     skip: 0,
//     exporting: false
//   };

//   scrollHandler = (event) => {
//     const e = event.nativeEvent;

//     if (
//       e.target.scrollTop + 10 >=
//       e.target.scrollHeight - e.target.clientHeight
//     ) {
//       const moreData = AppointmentData.splice(0, 10);
//     }
//   };
//   render() {
   
//     const grid =<Grid
//     style={{
//         // width:"98%",
//         // minWidth:"100px",
//         height:"500px",
//     //   position: "relative",
//         margin:"auto",
//         fontSize:"16px",
//         // maxHeight:"inherit",
//     }}
//     onScroll={this.scrollHandler}
//     scrollable={"virtual"}
//     data={filterBy(AppointmentData, this.state.filter)}
//     filterable={true}
//     filter={this.state.filter}
//     onFilterChange={(e) => {
//       this.setState({
//         filter: e.filter,
//       });
//     }}

//   >
{/* <GridToolbar>
<Card style={{position: "absolute", padding:"10px", fontSize:"15px",right:"10px"}} title="Export PDF" className="k-button k-primary" onClick={this.exportPDF} disabled={this.state.exporting}>
Download as PDF
</Card>
</GridToolbar> */}

//     {/* <Column field="ProductID" title="No" filterable={false} width="60px" headerCell={ProductNameHeader}/> */}

    // <Column
    //   field="status"
    // width="120px"
    //   title="Status"
    //   headerCell={ProductNameHeader}
    // />
    // <Column
    //   field="dateOfAppointment"
    // width="120px"
    // //   filter="date"
    //   title="Date"
    //   headerCell={ProductNameHeader}
    // />

    // <Column
    //   field="time"
    // width="120px"
    //   title="Time"
    //   headerCell={ProductNameHeader}
    // />
    // <Column field="physicianName" 
    // title="Physician Name" 
    // width="150px"
    // headerCell={ProductNameHeader}
    // />
    //     <Column
    //   field="specilization"
    // width="150px"
    //   title="Specialization"
    //   headerCell={ProductNameHeader}
    // />
    // <Column
    //   field="notes"
    // width="250px"
    //   title="Prescriptions/Notes"
    //   headerCell={ProductNameHeader}
    // />
    
  

//   </Grid>
    
//     return (<div>

//         <div style={{}}>
		// 	<Card
		// 	body
		// 	inverse
		// 	style={{
		// 	backgroundColor: '#04c0c1',
    //   borderColor: '#333',
    //   margin:"auto",
    //   padding:"5px",
    //   textAlign: 'center'  ,
    // // width:"auto",      
		// 	}}
		// 	>
    //   			{/* <Card
		// 	 style={{
		// 		 backgroundColor: '#eef1f1',
		// 		 borderColor: '#333',
		// 		//  width:"80%",
		// 		//  margin:"auto",
		// 	   }}> */}
		// 	<CardTitle tag="h2" style={{ textAlign: 'center'}}>
		// 	My Appointment List
		// 	</CardTitle>
		// 	</Card>
			// <Card style={{backgroundColor: '#eef1f1',borderColor: '#333', }}>
  
      //   {grid}
      //       <GridPDFExport ref={gridPDFExport}>
      //         {grid}
      //       </GridPDFExport>

			// </Card>
// 			{/* </Card> */}

//           </div>
          
//           </div>
          
//   )
//   }


// }


export default class AppointmentHistory extends React.Component {

  // total = AppointmentData.length;
  // pageSize = 5
  state = {
    data: AppointmentData.slice(0, this.pageSize),
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
    data={filterBy(AppointmentData, this.state.filter)}
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
    width="120px"
      title="Time"
      headerCell={ProductNameHeader}
    />
    <Column field="physicianName" 
    title="Physician Name" 
    width="180px"
    headerCell={ProductNameHeader}
    />
   <Column field="physicianId" 
    title="Physician ID" 
    width="150px"
    headerCell={ProductNameHeader}
    />
        <Column
      field="specilization"
    width="140px"
      title="Specialization"
      headerCell={ProductNameHeader}
    />
    <Column
      field="notes"
    width="250px"
      title="Prescriptions/Notes"
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
			<CardTitle tag="h2" style={{ textAlign: 'center',color:"white"}}>
			My Appointment List
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