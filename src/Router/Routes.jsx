import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Register, ErrorPage, ForgotPassword } from '../Views';
import { AppointmentHistory, PatientDashboard, Demographics, Immunization, Medcication_Allergies, PatientVitals, Profile, ScheduleAppointment, BillingDetails }  from '../Views/Patient/';
import { Billing, AdminDashboard, ManagePatientRecords, ManagePhysicianRecords, ManageUsers } from '../Views/Admin';
import { PatientDetails, PhysicianDashboard, PhysicianProfile } from '../Views/Physician';

class Routes extends React.Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    {/* patient Routes */}
                    <Route path="/" exact render={() => <Login />} />
                    <Route path="/registration" render={() => <Register />} />
                    <Route path="/changePassword" render={() => <ForgotPassword />} />
                    <Route path="/patient/dashboard" render={() => <PatientDashboard />} />
                    <Route path="/patient/appointment_history" render={() => <AppointmentHistory />} />
                    <Route path="/patient/demographics" render={() => <Demographics />} />
                    <Route path="/patient/immunization" render={() => <Immunization />} />
                    <Route path="/patient/medcication_Allergies" render={() => <Medcication_Allergies />} />
                    <Route path="/patient/patientVitals" render={() => <PatientVitals/>} />
                    <Route path="/patient/profile" render={() => <Profile />} />
                    <Route path="/patient/scheduleAppointment" render={() => <ScheduleAppointment/>} />
                    <Route path="/patient/billingDetails" render={() => <BillingDetails />} />
                    {/* Admin Routes */}
                    <Route path="/admin/dashboard" render={() => <AdminDashboard />} />
                    <Route path="/admin/patientRecords" render={() => <ManagePatientRecords />} />
                    <Route path="/admin/physicianRecords" render={()=> <ManagePhysicianRecords />} />
                    <Route path="/admin/manageUsers" render={() => <ManageUsers />} />
                    <Route path="/admin/billingData" render={() => <Billing />} />
                    {/* Physician Routes */}
                    <Route path="/physician/patientDetails" render={() => <PatientDetails />} />
                    <Route path="/physician/physicianDashboard" render={() => <PhysicianDashboard />} />
                    <Route path="/physician/physicianProfile" render={() => <PhysicianProfile />} />
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