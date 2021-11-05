import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AvForm, AvField } from 'availity-reactstrap-validation';

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
            [e.target.name] : e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault()
    };

    render() {
        return (
            <div className="container border border-dark my-5">
                <h4 className="text-primary text-center my-2">Log into Patient Portal</h4>
                <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 py-4 my-4">
                    <AvForm onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <label className="h6">User Name</label>
                            </div>
                            <div className="form-group col-6">
                                <AvField type="email" name="username" value={this.state.username} onChange={this.handleChange} className="form-control" validate={{
                                    required: { value: true, errorMessage: 'Username is required' },
                                    pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, errorMessage: 'Username is Invalid' }
                                }}/>
                                <span className="small">Forgot Username?</span>
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
                                <span className="small">Forgot Password?</span>
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <button className="btn btn-primary px-5 rounded-0">LOGIN</button>
                        </div>
                    </AvForm>
                </div>
                <hr className="border border-dark mx-5" />
                <h6 className="text-center my-5">I am New here</h6>
                <div className="text-center">
                    <button className="btn btn-outline-primary border border-dark rounded-0 mb-4 ">
                        <Link to="/registration" className="text-decoration-none" style={{color:"inherit"}}>CREATE ACCOUNT</Link>
                    </button>
                </div>
            </div>
        )
    }
}
export default Login