import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import logo from '../../Assets/Images/logo.png';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    componentDidMount(){
        // axios.get("http://localhost:8000/users")
        // .then(res => {
        //     console.log("Test data checked is",res)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
        console.log("props are",this.props)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            email: this.state.username,
            password: this.state.password
        }
        axios.post("http://localhost:8000/login",data)
        .then(res => {
            if(res.data){
                console.log("login details are",res.data)
                let token = res.data.accessToken;
                let role = res.data.user.role;
                this.myFormRef && this.myFormRef.reset();
                if(token !== "" && token !== undefined && token !== null){
                    localStorage.setItem("accessToken",token)
                    if(role === "Patient"){
                        this.props.history.push("/patient/dashboard/");
                    }else if(role === "Physician"){
                        this.props.history.push("/physician/dashboard")
                    }else{
                        this.props.history.push("/admin/dashboard")
                    }
                }
            }
        })
        .catch(err => {
            this.myFormRef && this.myFormRef.reset();
            console.log("Error Found is",err)
        })
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
                            <AvForm className="text-left login-font mt-4 px-3" onSubmit={this.handleSubmit} ref={c => (this.myFormRef = c)}>
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
export default Login;