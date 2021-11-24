import React, { Component } from 'react';
import { AvForm, AvField} from 'availity-reactstrap-validation';
import './PhysicianProfile.css'
import pencil from '../../../Assets/Images/pencil.svg';
import axios from 'axios';



class PhysicianProfile extends Component {
   
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            gender:'',
            mobile: '',
            specilization:'',
            experience:'',
            disabled: false,
            edit: false

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    componentDidMount() {
        axios.get("http://localhost:8000/users").then(resp => {
            if (resp.data) {
                resp.data.forEach((val) => {
                    if (val.email == 'chaitanya@gmail.com') {
                        this.setState({
                            firstname: val.firstname,
                            lastname: val.lastname,
                            mobile: val.mobile,
                            gender: val.gender,
                            id: val.id
                        })


                    }

                })


            }
        })
    }



    handleEditClik = (e) => {
        this.setState({ edit: !this.state.edit })
        // console.log('disabled', this.state.edit, 'pencilIcon')
        this.setState({ disabled: !this.state.disabled })

    }




    handleSubmit = (e, error, values) => {
        // console.log('userFirst', this.state)
        if (error == '') {



            let profileData = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                gender: this.state.gender,
                mobile: this.state.mobile,
                specilization:this.state.specilization,
                experience:this.state.experience


            }


            console.log('profileData', profileData);

            axios.post("http://localhost:8000/physicianProfile", profileData)
                .then(res => {
                    // console.log('res', res)
                    if (res.data) {
                        alert("Profile update is Success.")
                    }
                })
                .catch(err => {
                    if (err) {
                        alert("something went wrong.Please try after some time")
                        console.log(err)
                    }
                })
            //    this.reset();
        }
        else{
            console.log('error')
        }
    }

    render() {
        return (
            <div className='wrapper'>
                  <div className='heading-title mb-4'>
                    <span className="text-primary">Edit Profile</span>
                    <img className='ml-2' src={pencil} onClick={this.handleEditClik} />
                </div>
               <div className="row mx-0">
                    {/* <img  src={pencil} onClick={this.handleEditClik}/> */}
                    <AvForm onSubmit={this.handleSubmit} ref={c => (this.myFormRef = c)}>

                        <div className="row">

                            <div className="col-4">
                                <label className="h6">First Name</label>
                            </div>

                            <div className="form-group col-8">
                                <AvField type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} className="form-control" disabled={(this.state.disabled) ? false : true}
                                    validate={{
                                        required: { value: true, errorMessage: "First Name is required" },
                                        pattern: { value: /^[A-Za-z\/\s\.'-]+$/, errorMessage: 'First Name is Invalid' }
                                    }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label className="h6">Last Name</label>
                            </div>
                            <div className="form-group col-8">
                                <AvField type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} className="form-control" disabled={(this.state.disabled) ? false : true}
                                    validate={{
                                        required: { value: true, errorMessage: "Last Name is required" },
                                        pattern: { value: /^[A-Za-z\/\s\.'-]+$/, errorMessage: 'Last Name is Invalid' }

                                    }} />
                            </div>
                        </div>
                      
                        <div className="row">
                            <div className="col-4">
                                <label className="h6">Gender</label>
                            </div>
                            <div className="form-group col-8">
                                <AvField type="select" name="gender" value={this.state.gender} onChange={this.handleChange} className="form-control" disabled={(this.state.disabled) ? false : true} required>
                                    <option value="">{this.state.gender}</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </AvField>
                            </div>
                        </div>
                      
                        <div className="row">
                            <div className="col-4">
                                <label className="h6">Specilization</label>
                            </div>
                            <div className="form-group col-8">
                                <AvField type="select" name="specilization" value={this.state.specilization} onChange={this.handleChange} className="form-control" required>
                                    <option value="">-- select --</option>
                                    <option value="Employee">Employee</option>
                                    <option value="Worker">Worker</option>
                                    <option value="Self-Employed">Self-Employed</option>
                                </AvField>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4">
                                <label className="h6">Experience</label>
                            </div>
                            <div className="form-group col-8">
                                <AvField type="select" name="experience" value={this.state.experience} onChange={this.handleChange} className="form-control" required>
                                    <option value="">-- select --</option>
                                    <option value="0 - 2">0 - 2 years</option>
                                    <option value="2 - 5">2 - 5 years</option>
                                    <option value="5 - 10">5 - 10 years</option>
                                </AvField>
                            </div>
                        </div>
                     
                      
                        <div className="row">
                            <div className="col-4">
                                <label className="h6">Mobile</label>
                            </div>
                            <div className="form-group col-8">
                                <AvField type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange} className="form-control" disabled={(this.state.disabled) ? false : true }
                                    minLength={10} maxLength={10} validate={{
                                        required: { value: true, errorMessage: 'Mobile Number is required' }
                                    }} />
                            </div>
                        </div>

                        <div col-4>
                            <button className="btn btn-outline-primary">Update</button>
                        </div>
                        <div>

                        </div>


                    </AvForm>
                    {/* <button  onClick={this.handleEditClik} >Edit</button> */}





                </div>
            </div>
        )
    }
}

export default PhysicianProfile