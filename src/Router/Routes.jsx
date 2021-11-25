import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Login,
  Register,
  ErrorPage,
  ForgotPassword,
  UserVerification,
} from "../Views";
import {
  AppointmentHistory,
  PatientDashboard,
  Demographics,
  Immunization,
  Medcication_Allergies,
  PatientVitals,
  Profile,
  ScheduleAppointment,
  BillingDetails,
  PayBills,
  PatientInfo,
} from "../Views/Patient/";
import {
  Billing,
  AdminDashboard,
  ManagePatientRecords,
  ManagePhysicianRecords,
  ManageUsers,
  PatientVisitHistory,
  AdminProfile,
} from "../Views/Admin";
import {
  PatientDetails,
  PhysicianDashboard,
  PhysicianProfile,
  PhysicianAppointmentHistory,
} from "../Views/Physician";
import Header from "../Common/Header/Header";
import LeftNav from "../Common/LeftNav/LeftNav";
import Footer from "../Common/Footer/Footer";
import MasterData from "../Views/Admin/MasterData/MasterData";
import AdminAppointmentHistory from "../Views/Admin/AdminAppointmentHistory/AdminAppointmentHistory";
import JoinAppointment from "../Views/Physician/PhysicianJoinAppointment/PhysicianJoinAppointment";
import PatientJoinAppointment from "../Views/Physician/PhysicianJoinAppointment/PhysicianJoinAppointment";
import Prescription from "../Views/Physician/Prescription/Prescription";

class Routes extends React.Component {
  render() {
    const token = localStorage.getItem("accessToken");
    return (
      <div>
        <Switch>
          {/* General Routes */}
          <Route path="/" exact render={(props) => <Login {...props} />} />
          <Route path="/registration" render={(props) => <Register {...props} />} />
          <Route
            path="/userVerification"
            render={(props) => <UserVerification {...props} />}
          />
          <Route path="/changePassword" render={() => <ForgotPassword />} />
          {/* patient Routes */}
          {/* {token && (token !== undefined && token !== null && token !== "") &&
                    <>
                    <Header />
                    <LeftNav />                     */}
          <Route
            path="/patient/dashboard"
            render={() => <PatientDashboard />}
          />
          <Route
            path="/patient/appointment_history"
            render={() => <AppointmentHistory />}
          />
          <Route path="/patient/immunization" render={() => <Immunization />} />
          <Route
            path="/patient/medcication_Allergies"
            render={() => <Medcication_Allergies />}
          />
          <Route
            path="/patient/patientVitals"
            render={() => <PatientVitals />}
          />
          <Route
            path="/patient/scheduleAppointment"
            render={() => <ScheduleAppointment />}
          />
          <Route
            path="/patient/joinAppointment"
            render={() => <JoinAppointment />}
          />
          <Route path="/patient/payBills" render={() => <PayBills />} />
          <Route
            path="/patient/billingDetails"
            render={() => <BillingDetails />}
          />
          {/* <Route path="/patient/billingDetails" render={() => <BillingDetails />} /> */}
          <Route path="/patient/patientInfo" render={() => <PatientInfo />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" render={() => <AdminDashboard />} />
          <Route
            path="/admin/patientRecords"
            render={() => <ManagePatientRecords />}
          />
          <Route
            path="/admin/physicianRecords"
            render={() => <ManagePhysicianRecords />}
          />
          <Route path="/admin/manageUsers" render={() => <ManageUsers />} />
          <Route path="/admin/billingData" render={() => <Billing />} />
          <Route
            path="/admin/patientVisitHistory"
            render={() => <PatientVisitHistory />}
          />
          <Route path="/admin/masterData" render={() => <MasterData />} />
          <Route path="/admin/adminProfile" render={() => <AdminProfile />} />
          <Route
            path="/admin/appointmentHistory"
            render={() => <AdminAppointmentHistory />}
          />
          {/* Physician Routes */}
          <Route
            path="/physician/profile"
            render={() => <PhysicianProfile />}
          />
          <Route
            path="/physician/patientDetails"
            render={() => <PatientDetails />}
          />
          <Route
            path="/physician/dashboard"
            render={() => <PhysicianDashboard />}
          />
          <Route
            path="/physician/joinAppointment"
            render={() => <JoinAppointment />}
          />
          <Route
            path="/physician/appointmentHistory"
            render={() => <PhysicianAppointmentHistory />}
          />
          <Route
            path="/physician/Prescription"
            render={() => <Prescription />}
          />

          {/* Other Routes */}
          <Route path="/UnauthorizedAccess" render={() => <ErrorPage />} />
          <Route path="/page_expired" render={() => <ErrorPage />} />
          <Route path="*" render={() => <ErrorPage />} status={404} />
        </Switch>
      </div>
    );
  }
}
export default Routes;
