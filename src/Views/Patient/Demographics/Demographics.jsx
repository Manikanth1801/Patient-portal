import React, { Component } from 'react';
import { AvForm, AvField} from 'availity-reactstrap-validation';
import axios from 'axios';


class Demographics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            medicalHistory: '',
            familyMedicalHistory: '',
            surgeries: '',
            insuranceProvider: ''
        }
    }
    handleChange = (e) => {
        // console.log('e',e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e,error) => {
        if (error == '') {
            let demoData = {

                medicalHistory: this.state.medicalHistory,
                familyMedicalHistory: this.state.familyMedicalHistory,
                surgeries: this.state.surgeries,
                insuranceProvider: this.state.insuranceProvider

            }
            console.log('demoData', demoData);
            axios.post("http://localhost:8000/patientDemographics", demoData)
                .then(res => {
                    console.log('res', res)
                    if (res.data) {
                        alert("Demographics update is Success.")
                    }
                })
                .catch(err => {
                    if (err) {
                        alert("something went wrong.Please try after some time")
                        console.log(err);
                    }
                })
        }

    }

    render() {
        return (
            <div >

                <AvForm onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-6">
                            <label className="h6">Medical History</label>
                        </div>
                        <div className="form-group col-8">
                            <AvField type='textarea' name="medicalHistory" value={this.state ? this.state.medicalHistory : ''} onChange={this.handleChange} id="medicalHistory" validate={{
                                required: { value: true, errorMessage: "Medical History is required" },

                            }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="h6">Family Medical History</label>
                        </div>
                        <div className="form-group col-8">
                            <AvField type='textarea' name="familyMedicalHistory" value={this.state ? this.state.familyMedicalHistory : ''} onChange={this.handleChange} id="familyMedicalHistory" validate={{
                                required: { value: true, errorMessage: "Family Medical History is required" },

                            }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="h6">Surgeries</label>
                        </div>
                        <div className="form-group col-8">
                            <AvField type='textarea' name="surgeries" value={this.state ? this.state.surgeries : ''} onChange={this.handleChange} id="surgeries" validate={{
                                required: { value: true, errorMessage: "Surgeries is required" },

                            }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label className="h6">Insurance Provider</label>
                        </div>
                        <div className="form-group col-8">
                            <AvField type='textarea' name="insuranceProvider" value={this.state ? this.state.insuranceProvider : ''} onChange={this.handleChange} id="insuranceProvider" validate={{
                                required: { value: true, errorMessage: "Insurance Provider is required" },

                            }} />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-6" id='submit'>
                            <button className="btn btn-outline-primary">Submit</button>
                        </div>
                    </div>
                </AvForm>
            </div>





        )
    }
}

export default Demographics