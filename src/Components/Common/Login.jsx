import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="center">
            <h1>Login</h1>
            <from methode="post">
                <div className= "txt_field">
                    <input type="text" required></input>
                    <label>Username</label>
                </div>
                <div className="txt_field">
                <input type="password" required></input> 
                <label>Password</label>
                </div>
                <div className="pass">Forgot Password?</div>
                <input type="submit" value="Login"></input>
            </from>

        </div>
    )
}

export default Login
