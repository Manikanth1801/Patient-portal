import React from 'react';
import { Switch, Route} from 'react-router-dom';
import PatientDashboard from '../../Users/Patient/PatientDashboard';
import PhysicianDashboard from '../../Users/Physician/PhysicianDashboard';
import AdminDashboard from '../../Users/Admin/AdminDashboard';
import SideBar from '../SideBar'

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path = '/Patient/dashboard'>
                    <PatientDashboard/>
                </Route>
                <Route path = '/Physician/dashboard'>
                    <PhysicianDashboard/>
                </Route>
                <Route path = '/Admin/dashboard'>
                    <AdminDashboard/>
                </Route>
            </Switch>
        </div>
    )
}
