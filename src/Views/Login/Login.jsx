import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import logo from '../../Assets/Images/logo.png';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault()
    };

    render() {
        return (
            <div style={{ backgroundColor: "#f3f2f1" }}>
                <div className="py-3 d-flex justify-content-center bg-color">
                    <img src={logo} alt="Logo" className="img-fluid my-3" />
                </div>
                <div className="container">
                    <div className="text-center align-items-center login-box">
                        <div className="col-12 col-md-8 col-lg-5 pt-0 px-0 offset-lg-4 border rounded" style={{ backgroundColor: "#ffffff" }}>
                            <div className="col py-2 text-light rounded" style={{ backgroundColor: "#000000" }}>
                                <span className="h2">ENTER YOUR LOGIN</span>
                            </div>
                            <AvForm className="text-left login-font mt-4 px-3">
                                <div className="form-group">
                                    <label>Username</label>
                                    <div className="form-group">
                                        <AvField type="email" name="username" value={this.state.username} placeholder="Email address" onChange={this.handleChange} className="form-control" 
                                            validate={{
                                            required: { value: true, errorMessage: 'Username is required' },
                                            pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, errorMessage: 'Username is Invalid' }
                                        }} />
                                    </div>
                                </div>
                                <div>
                                    <label>Password</label>
                                    <div className="form-group">
                                        <AvField type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} className="form-control" 
                                            validate={{
                                            required: { value: true, errorMessage: 'Password is required' }
                                        }} />
                                        <span><Link to="/UserVerification">Forgot Password?</Link></span>
                                    </div>
                                </div>
                                <div className="text-center my-5">
                                    <button className="btn btn-primary px-5 rounded-0">LOGIN</button>
                                </div>
                            </AvForm>
                            <span>Don't have an Account? <Link to="/registration">Sign up</Link></span>
                        </div>
                    </div>
                </div>
                <div className="py-5 d-flex justify-content-center bg-color" style={{ marginTop: "12.5%" }}></div>
            </div>
        )
    }
}
export default Login