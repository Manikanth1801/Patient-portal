import { Link } from 'react-router-dom';
import './App.css';
import Footer from './Components/Common/Footer';
import Header from './Components/Common/Header';
import Routes from './Components/Common/Routes/Routes';
import Display from './Components/Display';

const data = {
  
} 
const sidebar = [
  {
    page: "Patient",
    properties:[
      {
      dashboard: "Dashboard",
      myProfile: "My Profile",
      scheduleAppointment: "Schedule Appointment",
      appointmentHistory: "Appointment History",
      demographics: "Demographics",
      medicationAllergies: "Medication and Allergies",
      immunizationDetails: "Immunization Details",
      patientVitals: "Patient Vitals",
      order: "Order",
      patientEducation: "Patient Education",
    }
  ]
  },
  {
    page: "Physician",
    properties:[
      {
      dashboard: "Dashboard",
      patientDetails: "Patient details",
    }
  ]
  }
]

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes/>
     <Display sidebar = {sidebar} />
     <Footer/>
    </div>
  );
}

export default App;
