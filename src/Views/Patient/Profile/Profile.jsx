import React, { Component } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import axios from 'axios';
import './Profile.css'
import pencil from '../../../Assets/Images/pencil.svg'
class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gender: '',
            ethnicity: '',
            education: '',
            employment: '',
            address: '',
            avatar: '',
            firstname: '',
            lastname: '',
            dob: '',
            mobile: '',
            id: '',
            disabled: false,
            edit: false

        }
    }
    handleChange = (e) => {
        console.log('eee', e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    componentDidMount() {
        // console.log('edit', this.state.edit)
        axios.get("http://localhost:8000/users").then(resp => {
            if (resp.data) {
                resp.data.forEach((val) => {
                    if (val.email == 'chaitanya@gmail.com') {
                        this.setState({
                            firstname: val.firstname,
                            lastname: val.lastname,
                            dob: val.dob,
                            mobile: val.mobile,
                            id: val.id
                        })


                    }

                })


            }
        })
    }

    handleSubmit = (e, error, values) => {
        console.log('userFirst', this.state)
        if (error == '') {



            let profileData = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                gender: this.state.gender,
                ethnicity: this.state.ethnicity,
                education: this.state.education,
                employment: this.state.employment,
                dob: this.state.dob,
                address: this.state.address,
                mobile: this.state.mobile,


            }


            console.log('profileData', profileData);

            axios.post("http://localhost:8000/patientProfile", profileData)
                .then(res => {
                    console.log('res', res)
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

            if (this.state.edit) {
                console.log(this.state.userID);
                axios.put('http://localhost:8000/users/this.state.id', {
                    firstname: profileData.firstname,
                    lastname: profileData.lastname,
                    mobile: profileData.mobile
                })


            }
        }
    }

    handleEditClik = (e) => {
        this.setState({ edit: !this.state.edit })
        console.log('disabled', this.state.edit, 'pencilIcon')
        this.setState({ disabled: !this.state.disabled })

    }

    // reset = () => {
    //     this.myFormRef && this.myFormRef.reset();
    //     this.setState({
    //         dob : ''
    //     })
    // }

    render() {
        return (
            <div className="wrapper">
                <div className='heading-title mb-4'>
                    <span className="text-primary">Edit Profile</span>
                    <img className='ml-2' src={pencil} onClick={this.handleEditClik} />
                </div>
                {/* <h4 className="col-12 bg-primary text-light border border-dark py-2">Patient Portal</h4> */}
                {/* <span className="text-primary pl-4">Profile</span> */}
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
                                <label className="h6">Education</label>
                            </div>
                            <div className="form-group col-8">
                                <AvField type="select" name="education" value={this.state.educaton} onChange={this.handleChange} className="form-control" required>
                                    <option value="">-- select --</option>
                                    <option value="Graduate">Graduate</option>
                                    <option value="Graduate">Post Graduate</option>
                                    <option value="Others">Others</option>
                                </AvField>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label className="h6">Gender</label>
                            </div>
                            <div className="form-group col-8">
                                <AvField type="select" name="gender" value={this.state.gender} onChange={this.handleChange} className="form-control" required>
                                    <option value="">-- select --</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </AvField>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label className="h6">Ethnicity</label>
                            </div>
                            <div className="form-group col-8">
                                <AvField type="select" name="ethnicity" className='form-control' value={this.state.ethnicity} onChange={this.handleChange} className="form-control" required>
                                    <option value="">-- select --</option>
                                    <option value="Indian">Indian</option>
                                    <option value="American">American</option>
                                    <option value="Others">Others</option>
                                </AvField>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label className="h6">Employment</label>
                            </div>
                            <div className="form-group col-8">
                                <AvField type="select" name="employment" value={this.state.employment} onChange={this.handleChange} className="form-control" required>
                                    <option value="">-- select --</option>
                                    <option value="Employee">Employee</option>
                                    <option value="Worker">Worker</option>
                                    <option value="Self-Employed">Self-Employed</option>
                                </AvField>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label className="h6">D.O.B</label>
                            </div>
                            <div className="form-group col-8">
                                <AvField type="date" name="dob" value={this.state.dob} className="form-control" onChange={this.handleChange} disabled={(this.state.disabled) ? false : true } required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label className="h6">Address</label>
                            </div>

                            <div className="form-group col-8">
                                <AvField type="textarea" name="address" value={this.state.address} onChange={this.handleChange} className="form-control" validate={{
                                    required: { value: true, errorMessage: "address is required" },
                                    pattern: { value: /^[A-Za-z\/\s\.'-]+$/, errorMessage: 'address is Invalid' }
                                }}
                                />
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

export default Profile




