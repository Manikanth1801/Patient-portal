import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import axios from 'axios';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            retypePassword:'',
            dob:'',
            role:'',
            mobile:'',
            isDone: false
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            retypePassword: this.state.retypePassword,
            dob: this.state.dob,
            role: this.state.role,
            isRegistered: false,
            mobile: this.state.mobile
        }
        axios.post("http://localhost:8000/users",data)
        .then(res => {
            if(res.data){
                this.setState({ isDone: true })
                alert("Your Registration is Success.")
            }
        })
        .catch(err => {
            if(err){
                alert("something went wrong.Please try after some time")
                console.log(err)
            }
        })
        this.reset();
    };
    reset = () => {
        this.myFormRef && this.myFormRef.reset();
        this.setState({
            dob : ''
        })
    }
    
    render(){
        return(
            <div className="border border-dark">
                <h4 className="col-12 bg-primary text-light border border-dark py-2">Patient Portal</h4>
                <span className="text-primary pl-4">Register here</span>
                <div className="row pl-3 my-2 ml-2">
                    <AvForm onSubmit={this.handleSubmit} ref={c => (this.myFormRef = c)}>
                        <div className="row">
                            <div className="col-6">
                                <label className="h6">First Name</label>
                            </div>
                            <div className="form-group col-6">
                                <AvField type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} className="form-control" validate={{
                                    required: { value: true, errorMessage:"First Name is required" },
                                    pattern: { value: /^[A-Za-z\/\s\.'-]+$/, errorMessage: 'First Name is Invalid' }
                                }}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label className="h6">Last Name</label>
                            </div>
                            <div className="form-group col-6">
                                <AvField type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} className="form-control" validate={{
                                    required: { value: true, errorMessage:"Last Name is required" },
                                    pattern: { value: /^[A-Za-z\/\s\.'-]+$/, errorMessage: 'Last Name is Invalid' }
                                    
                                }}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label className="h6">Email Id</label>
                            </div>
                            <div className="form-group col-6">
                                <AvField type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" validate={{
                                    required: { value: true, errorMessage: 'Email id is required' },
                                    pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, errorMessage: 'Email id is Invalid' }
                                }}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label className="h6">Password</label>
                            </div>
                            <div className="form-group col-6">
                                <AvField type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" validate={{
                                    required: { value: true, errorMessage: 'Password is required' }
                                }}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label className="h6">Retype Password</label>
                            </div>
                            <div className="form-group col-6">
                                <AvField type="password" name="retypePassword" value={this.state.retypePassword} onChange={this.handleChange} className="form-control" validate={{
                                    required: { value: true, errorMessage: 'Password is required' }
                                }}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label className="h6">D.O.B(DD/MM/YYYY)</label>
                            </div>
                            <div className="form-group col-6">
                                <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange} className="form-control" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label className="h6">Role</label>
                            </div>
                            <div className="form-group col-6">
                                <AvField type="select" name="role" value={this.state.role} onChange={this.handleChange} className="form-control">
                                    <option value="">-- select --</option>
                                    <option value="Patient">Patient</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Physician">Physician</option>
                                </AvField>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label className="h6">Mobile</label>
                            </div>
                            <div className="form-group col-6">
                                <AvField type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange} className="form-control" minLength={10} maxLength={10} validate={{
                                    required: { value: true, errorMessage: 'Mobile Number is required' }
                                }}/>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-outline-primary">Register</button>
                        </div>
                    </AvForm>
                </div>
            </div>
        )
    }
}
export default Register