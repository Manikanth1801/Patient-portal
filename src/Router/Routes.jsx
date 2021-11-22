import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Register, ErrorPage, ForgotPassword } from '../Views';
import { AppointmentHistory, PatientDashboard, Demographics, Immunization, Medcication_Allergies, PatientVitals, Profile, ScheduleAppointment, BillingDetails}  from '../Views/Patient/';
import { Billing, AdminDashboard, ManagePatientRecords, ManagePhysicianRecords, ManageUsers } from '../Views/Admin';
import { PatientDetails, PhysicianDashboard, PhysicianProfile } from '../Views/Physician';
import { PatientInfo } from '../Views/Patient/PatientInfo';

class Routes extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    {/* General Routes */}
                    <Route path="/" exact render={() => <Login />} />
                    <Route path="/registration" render={() => <Register />} />
                    <Route path="/userVerification" render={() => <UserVerification />} />
                    {/* patient Routes */}
                    <Route path="/changePassword" render={() => <ForgotPassword />} />
                    <Route path="/patient/dashboard" render={() => <PatientDashboard />} />
                    <Route path="/patient/appointment_history" render={() => <AppointmentHistory />} />
                    {/* <Route path="/patient/demographics" render={() => <Demographics />} /> */}
                    <Route path="/patient/immunization" render={() => <Immunization />} />
                    <Route path="/patient/medcication_Allergies" render={() => <Medcication_Allergies />} />
                    <Route path="/patient/patientVitals" render={() => <PatientVitals/>} />
                    {/* <Route path="/patient/profile" render={() => <Profile />} /> */}
                    <Route path="/patient/scheduleAppointment" render={() => <ScheduleAppointment/>} />
                    <Route path="/patient/billingDetails" render={() => <BillingDetails />} />
                    {/* <Route path="/patient/billingDetails" render={() => <BillingDetails />} /> */}
                    <Route path="/patient/patientInfo" render={() => <PatientInfo/>} />


                    <Route path="/patient/wallet" render={() => <Wallet />} />
                    {/* Admin Routes */}
                    <Route path="/admin/dashboard" render={() => <AdminDashboard />} />
                    <Route path="/admin/patientRecords" render={() => <ManagePatientRecords />} />
                    <Route path="/admin/physicianRecords" render={()=> <ManagePhysicianRecords />} />
                    <Route path="/admin/manageUsers" render={() => <ManageUsers />} />
                    <Route path="/admin/billingData" render={() => <Billing />} />
                    <Route path="/admin/patientVisitHistory" render={() => <PatientVisitHistory />} />
                    {/* Physician Routes */}
                    <Route path="/physician/patientDetails" render={() => <PatientDetails />} />
                    <Route path="/physician/dashboard" render={() => <PhysicianDashboard />} />
                    <Route path="/physician/physicianProfile" render={() => <PhysicianProfile />} />
                    <Route path="/physician/physicianAppointmentHistory" render={() => <PhysicianAppointmentHistory />} />
                    {/* Other Routes */}
                    <Route path="/UnauthorizedAccess" render={() => <ErrorPage/>} />
                    <Route path="/page_expired" render={() => <ErrorPage/>} />
                    <Route path="*" render={() => <ErrorPage />} status={404} />
                </Switch>
            </div>
        )
    }
}
export default Routes