import React, { Component } from 'react';
import firebase from '../../Firebase/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import logo from '../../Assets/Images/logo.png';
import otpImage from "../../Assets/Images/otp.jpg"
import { signInWithPhoneNumber } from "firebase/auth";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

class UserVerification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            otp: '',
            isShow: false,
            isOtpSent: false
        }
    }
    configureCaptcha = () => {
        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                this.onSignInSubmit();
            }
        }, auth);
    }
    onSignInSubmit = (e) => {
        e.preventDefault()
        this.configureCaptcha()
        const phoneNumber = "+91" + this.state.mobile;
        const appVerifier = window.recaptchaVerifier;

        const auth = getAuth();
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                this.setState({
                    isOtpSent: true
                })
                alert("otp has been sent")
            }).catch((error) => {
                alert("sms not sent")
            });
    }
    otpSubmit = (e) => {
        e.preventDefault()
        const code = this.state.otp;
        window.confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            this.handleModal()
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
        });
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleModal = () => {
        this.setState({
            isShow: true
        })
    }
    closeModal = () => {
        this.setState({
            isShow: false
        },() => {
            this.props.history.push("/changePassword")
        })
    }
    render() {
        const { mobile, otp, isShow, isOtpSent } = this.state;
        return (
            <div style={{ backgroundColor: "#f3f2f1" }}>
                <div className="py-3 d-flex justify-content-start bg-color">
                    <img src={logo} alt="Logo" className="img-fluid my-3" />
                </div>
                <form className="container d-flex justify-content-center">
                    <div className="border border-dark col-12 col-md-12 col-lg-10 col-xl-5" style={{ marginTop: "5%", backgroundColor: "#ffffff" }}>
                        {isOtpSent === false &&
                            <div className="d-flex flex-column text-center my-5">
                                <div className=" justify-content-center d-flex " >
                                    <img src={otpImage} alt="Otp" className="img-fluid" width="150px" height="300px" />
                                </div>
                                <p>An OTP will be sent to your Mobile Number XXXXXX</p>
                            </div>}
                        {isOtpSent ===false &&
                            <div className="form-group  col-12 col-md-12 col-lg-10 col-xl-12  ">
                                <div id="sign-in-button"></div>
                                <label>Mobile Number</label>
                                <input type="number" name="mobile" value={mobile} placeholder="Enter your Mobile Number " className="my-3 form-control px-2 py-1" style={{ borderColor: "rgb(0,0,0,0.15)" }} onChange={this.handleChange} /><br />
                                <div className="text-center ">
                                    <button className="btn btn-primary" onClick={this.onSignInSubmit}>Send OTP</button>
                                </div>
                            </div>}
                        {isOtpSent &&
                            <div className="form-group  col-12 col-md-12 col-lg-10 col-xl-12  ">
                                
                                <label>Enter OTP</label>
                                <input type="number" className="my-3 form-control" placeholder="Enter your OTP" name="otp" value={otp} onChange={this.handleChange} />
                                <div className="text-center">
                                <button className="btn btn-success" onClick={this.otpSubmit}>Submit</button>
                                </div>
                            </div>
                        }
                    </div>
                </form>
                <Modal isOpen={isShow} toggle={this.closeModal}>
                    <ModalHeader toggle={this.closeModal}>
                        <ModalBody>
                            <p>OTP Validation is Successfull.You can Reset the Password Now.</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.closeModal}>Close</Button>
                        </ModalFooter>
                    </ModalHeader>
                </Modal>
                <div className="py-5" style={{ marginTop: "12.5%" }}></div>
            </div>
        );
    }
}

export default UserVerification;