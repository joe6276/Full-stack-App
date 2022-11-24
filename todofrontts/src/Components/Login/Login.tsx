import React from "react";
import { Link } from "react-router-dom";
import './login.css'

export const Login:React.FC =()=>{
    return (
        <div className="container">

            <div className="images">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="" />
            </div>
        <div className="form">
            <h3>Enter Login Credentials</h3>
            <div className="form-control">
                <label htmlFor="email"> Email</label>
                <input type="text" />
            </div>
             <div className="form-control">
                <label htmlFor="password"> Password</label>
                <input type="password" />
            </div>
            <p>Not a member? <Link to='/signup'>SignUp</Link></p>
             <div className="form-control">
                <button>Login</button>
            </div>
        </div>
        </div>
    )
}