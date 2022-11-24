import React from "react";
import { Link } from "react-router-dom";


export const SignUp:React.FC=()=>{
    let image='https://i.shgcdn.com/b635b680-f7f4-4277-b42c-e355b2a71b3a/-/format/auto/-/preview/3000x3000/-/quality/best/'
    return (
        <>
        <div className="container">

            <div className="images">
                <img src={image} alt="" />
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
        </>
    )
}