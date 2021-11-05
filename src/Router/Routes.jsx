import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Register, ErrorPage } from '../Views';
import { AppointmentHistory, Dashboard, Demographics, Immunization, Medcication_Allergies, PatientVitals, Profile, ScheduleAppointment }  from '../Views/Patient/';


class Routes extends React.Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route path="/" exact render={() => <Login />} />
                    <Route path="/registration" render={() => <Register />} />
                    <Route path="/patient/dashboard" render={() => <Dashboard />} />
                    <Route path="/patient/appointment_history" render={() => <AppointmentHistory />} />
                    <Route path="/patient/demographics" render={() => <Demographics />} />
                    <Route path="/patient/immunization" render={() => <Immunization />} />
                    <Route path="/patient/medcication_Allergies" render={() => <Medcication_Allergies />} />
                    <Route path="/patient/patientVitals" render={() => <PatientVitals/>} />
                    <Route path="/patient/profile" render={() => <Profile />} />
                    <Route path="/patient/scheduleAppointment" render={() => <ScheduleAppointment/>} />
                    <Route path="/UnauthorizedAccess" render={() => <ErrorPage/>} />
                    <Route path="/page_expired" render={() => <ErrorPage/>} />
                    <Route path="*" render={() => <ErrorPage />} status={404} />
                </Switch>
            </div>
        )
    }
}
export default Routes