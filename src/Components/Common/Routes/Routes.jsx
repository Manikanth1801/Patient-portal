import React from 'react'
import { Switch, Route} from 'react-router-dom'
import PatientDashboard from '../../Dashboard/PatientDashboard'
import PhysicianDashboard from '../../Dashboard/PhysicianDashboard'
import SideBar from '../SideBar'

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path = '/Patient'>
                   <PatientDashboard/> 
                </Route>
                <Route path = '/Physician'>
                   <PhysicianDashboard/>
                </Route>
            </Switch>
        </div>
    )
}
