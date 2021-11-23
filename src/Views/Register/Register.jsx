import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import axios from 'axios';
import logo from '../../Assets/Images/logo.png';
import './Register.css';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            gender: '',
            email: '',
            password: '',
            retypePassword: '',
            dob: '',
            role: '',
            isRegistered: false,
            mobile: '',
            specilization: null,
            otherSpecilization: null,
            experience: null,
            isDone: false,
            uuid: '', 
            lookupData: [],
            isOthersSelected: false
        }
    }
    componentDidMount(){
        axios.get("http://localhost:8000/lookups")
        .then(res => {
            let lookupData = res.data[0].specialization
            this.setState({
                lookupData
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        if(e.target.name === "specilization"){
            if(e.target.value === "Others"){
                this.setState({
                    isOthersSelected: true,
                })
            }else{
                this.setState({
                    isOthersSelected: false
                }) 
            }
        }
    };
    handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            uuid: this.state.uuid,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            gender: this.state.gender,
            email: this.state.email,
            password: this.state.password,
            retypePassword: this.state.retypePassword,
            dob: this.state.dob,
            role: this.state.role,
            isRegistered: false,
            mobile: this.state.mobile,
            specialization: this.state.specilization,
            experience: this.state.experience,
            isLogged: false,
            registrationDate: new Date(),
            isApproved: false
        }
        axios.post("http://localhost:8000/users", data)
            .then(res => {
                if (res.data) {
                    this.setState({ isDone: true })
                    alert("Your Registration is Success.")
                    this.myFormRef && this.myFormRef.reset();
                }
                this.setState({
                    isOthersSelected: false,
                    role: ""
                })
            })
            .catch(err => {
                if (err) {
                    alert("something went wrong.Please try after some time")
                    console.log(err)
                    this.myFormRef && this.myFormRef.reset();
                }
                this.setState({
                    isOthersSelected: false,
                    role: ""
                })
            })
    };

    render() {
        const { role, lookupData } = this.state
        return (
            <div style={{ backgroundColor: "#f3f2f1" }}>
                <div className="py-3 d-flex justify-content-center bg-color">
                    <img src={logo} alt="Logo" className="img-fluid ml-5 my-3" />
                </div>
                <div className="border border-dark container px-0" style={{ marginTop: "1%",backgroundColor: "#ffffff" }}>
                    <div className="text-center">
                        <h2 className="col-12 text-light py-2" style={{ backgroundColor: "#000000" }} >REGISTRATION FORM</h2>
                    </div>
                    
                    <div className="row pl-3 my-2 ml-2">
                        <AvForm onSubmit={this.handleSubmit} ref={c => (this.myFormRef = c)} className="col-12 col-md-12 col-lg-10 col-xl-12">
                            <div className="row ">
                                <div className="col-5 col-lg-4">
                                    <label className="h6">First Name<span className="text-danger pl-1">*</span></label>
                                </div>
                                <div className="form-group col-5 col-lg-4">
                                    <AvField type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} className="form-control" validate={{
                                        required: { value: true, errorMessage: "First Name is required" },
                                        pattern: { value: /^[A-Za-z\/\s\.'-]+$/, errorMessage: 'First Name is Invalid' }
                                    }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5 col-lg-4">
                                    <label className="h6">Last Name<span className="text-danger pl-1">*</span></label>
                                </div>
                                <div className="form-group col-5 col-lg-4">
                                    <AvField type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} className="form-control" validate={{
                                        required: { value: true, errorMessage: "Last Name is required" },
                                        pattern: { value: /^[A-Za-z\/\s\.'-]+$/, errorMessage: 'Last Name is Invalid' }

                                    }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5 col-lg-4">
                                    <label className="h6">Gender<span className="text-danger pl-1">*</span></label>
                                </div>
                                <div className="form-group col-5 col-lg-4">
                                    <AvField type="select" name="gender" value={this.state.gender} onChange={this.handleChange} className="form-control">
                                        <option value="">-- select --</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </AvField>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5 col-lg-4">
                                    <label className="h6">Email Id<span className="text-danger pl-1">*</span></label>
                                </div>
                                <div className="form-group col-5 col-lg-4">
                                    <AvField type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" validate={{
                                        required: { value: true, errorMessage: 'Email id is required' },
                                        pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, errorMessage: 'Email id is Invalid' }
                                    }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5 col-lg-4">
                                    <label className="h6">Password<span className="text-danger pl-1">*</span></label>
                                </div>
                                <div className="form-group col-5 col-lg-4">
                                    <AvField type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" validate={{
                                        required: { value: true, errorMessage: 'Password is required' }
                                    }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5 col-lg-4">
                                    <label className="h6">Retype Password<span className="text-danger pl-1">*</span></label>
                                </div>
                                <div className="form-group col-5 col-lg-4">
                                    <AvField type="password" name="retypePassword" value={this.state.retypePassword} onChange={this.handleChange} className="form-control" validate={{
                                        required: { value: true, errorMessage: 'Password is required' }
                                    }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5 col-lg-4">
                                    <label className="h6">D.O.B(DD/MM/YYYY)<span className="text-danger pl-1">*</span></label>
                                </div>
                                <div className="form-group col-5 col-lg-4">
                                    <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange} className="form-control" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5 col-lg-4">
                                    <label className="h6">Role<span className="text-danger pl-1">*</span></label>
                                </div>
                                <div className="form-group col-5 col-lg-4">
                                    <AvField type="select" name="role" value={this.state.role} onChange={this.handleChange} className="form-control">
                                        <option value="">-- select --</option>
                                        <option value="Patient">Patient</option>
                                        <option value="Physician">Physician</option>
                                        <option value="Admin">Admin</option>
                                    </AvField>
                                </div>
                            </div>
                            {
                                role === "Physician" &&
                                <div className="row">
                                    <div className="col-5 col-lg-4">
                                        <label className="h6">Specilization<span className="text-danger pl-1">*</span></label>
                                    </div>
                                    <div className="form-group col-5 col-lg-4">
                                        <AvField type="select" name="specilization" value={this.state.specilization} onChange={this.handleChange} className="form-control">
                                            <option value=""> -- select --</option>
                                            {lookupData ? lookupData.map((ele) => (
                                                <option value={ele.name} key={ele.name}>{ele.name}</option>
                                            )) : ''}
                                        </AvField>
                                    </div>
                                </div>
                            }
                            {
                                (role === "Physician" && this.state.isOthersSelected) ? 
                                <div className="row">
                                    <div className="col-5 col-lg-4">
                                        <label className="h6"></label>
                                    </div>
                                    <div className="form-group col-5 col-lg-4">
                                    <AvField type="text" name="otherSpecilization" value={this.state.otherSpecilization} onChange={this.handleChange} className="form-control" validate={{
                                        required: { value: true, errorMessage: 'specilization is required' }
                                    }} />
                                    </div>
                                </div>
                                : ""
                            }
                            {
                                role === "Physician" &&
                                <div className="row">
                                    <div className="col-5 col-lg-4">
                                        <label className="h6">Experience<span className="text-danger pl-1">*</span></label>
                                    </div>
                                    <div className="form-group col-5 col-lg-4">
                                        <AvField type="number" name="experience" value={this.state.experience} onChange={this.handleChange} className="form-control" min={1} max={30} validate={{
                                            required: { value: true, errorMessage: 'Experience in Years is required' }
                                        }} />
                                    </div>
                                </div>
                            }
                            <div className="row">
                                <div className="col-5 col-lg-4">
                                    <label className="h6">Mobile<span className="text-danger pl-1">*</span></label>
                                </div>
                                <div className="form-group col-5 col-lg-4">
                                    <AvField type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange} className="form-control" minLength={10} maxLength={10} validate={{
                                        required: { value: true, errorMessage: 'Mobile Number is required' }
                                    }} />
                                </div>
                            </div>
                            <div className="col-12 mb-2 d-flex justify-content-center">
                                <button className="btn btn-primary px-5 rounded-0">Register</button>
                            </div>
                            <div className="col-12 mb-2 d-flex justify-content-center">
                                <span>Already have an Account? <Link to="/">Login</Link></span>
                            </div>
                        </AvForm>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;