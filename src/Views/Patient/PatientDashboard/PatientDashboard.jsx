import React, { Component } from 'react';

class PatientDashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        console.log('props are',this.props)
        return (
            <div>
                <h1>This is patient Dashboard</h1>
            </div>
        )
    }
}

export default PatientDashboard