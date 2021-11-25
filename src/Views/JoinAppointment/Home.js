import { useEffect } from "react";

import Video from "./components/Video/Video";
import VideoState from "./context/VideoState";
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import Options from "./components/options/Options";
import {Card,CardTitle,CardText,CardColumns} from 'reactstrap'
import * as React from 'react';
import { filterBy,orderBy } from '@progress/kendo-data-query';

const PatientBillingData=[


  {
    "id": 2,
    "patientId": "PatCh001",
    "patientName": "Siddharth",
    "physicianId": "PhyMS001",
    "physicianName": "Dr.Samuel",
    "appointmentId": "CtApp044",
    "specilization": "Cardiology",
    "dateOfAppointment": "11/25/2021",
    "time": "5.30PM IST",
    "status": "Scheduled",
    "notes": "NA"
  },
  // {
  //   "id": 1,
  //   "patientId": "PatCh001",
  //   "patientName": "Chaitanya",
  //   "physicianId": "PhyMS001",
  //   "physicianName": "Dr.Samuel",
  //   "appointmentId": "CtApp011",
  //   "specilization": "Cardiology",
  //   "dateOfAppointment": "11/29/2021",
  //   "time": "3PM IST",
  //   "status": "Scheduled",
  //   "notes": "NA"
  // },

]


const Home = () => {
  useEffect(() => {
    if (!navigator.onLine) alert("Connect to internet!");
  }, [navigator]);
 
 useEffect(()=>{
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
 }, [])
  return (
    <VideoState>
      <div >

      <Card
    
     style={{
         backgroundColor: '#eef1f1',
         borderColor: '#333',
        //  width:"62%",
        // margin:"auto",
        
       }}
     >
      <Card
  
    style={{
        backgroundColor: '#04c0c1',
        borderColor: '#333',
        textAlign: 'center'  
        ,padding:"5px"      
      }}
  >
    <CardTitle tag="h2" style={{ textAlign: 'center',color:"white"}}>
      Join Online Consultation
    </CardTitle>

  </Card>
  <Grid
    style={{
      // height: "500px",
      // overflow: "scroll",
      fontSize: "15px",
      // textAlign:"center",
      // width:"100%"
      margin:"30px"
    
    }}
    // rowHeight={40}
    data={PatientBillingData}
    total={PatientBillingData.length}
  >
        <Column field="patientName" 
    title="Patient Name" 
    width="160px"
    // headerCell={ProductNameHeader}
    />
   <Column field="patientId" 
    title="Patient ID" 
    width="150px"
    // headerCell={ProductNameHeader}
    />

    <Column field="physicianName" 
    title="Physician Name" 
    width="160px"
    // headerCell={ProductNameHeader}
    />
   <Column field="physicianId" 
    title="Physician ID" 
    width="150px"
    // headerCell={ProductNameHeader}
    />
        <Column
      field="specilization"
    width="140px"
      title="Specialization"
      // headerCell={ProductNameHeader}
    />
<Column
      field="dateOfAppointment"
    width="130px"
    //   filter="date"
      title="Date"
      // headerCell={ProductNameHeader}
    />

    <Column
      field="time"
    width="120px"
      title="Time"
      // headerCell={ProductNameHeader}
    />
  
  </Grid>
  <div style={{marginLeft:"0px"}}><Video /></div>
        
        <Options />
  

        </Card>
      </div>
    </VideoState>


  );
};

export default Home;
