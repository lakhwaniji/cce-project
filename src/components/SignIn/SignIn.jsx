import React from "react";
import './signin.css'
import Lockillustration from '../../assets/lock_illustrations.jpg'
import ManipalLogo from '../../assets/logo.png'
import email from '../../assets/mail.svg'
import password from '../../assets/password.svg'
const SignIn=()=>{
    return(
        <div className="signin-container">
            <div className="signin-flex">
                <div className="signin-flex-1">
                    <img src={ManipalLogo} alt="Manipal Logo"/>
                    <div className="heading_signin">Enter Your Credentials</div>
                    <form action="">
                        <div className="input_box">
                            <div className="label">Email Address</div>
                            <div className="input_field">
                                <input name="email" type="text" placeholder="alex@jaipur.manipal.edu"/>
                                <img src={email} alt="Mail_Logo"/>
                            </div>
                        </div>
                        <div className="input_box">
                        <div className="label">Password</div>
                        <div className="input_field">
                            <input name="password" type="password" placeholder="Enter Your Password"/>
                            <img src={password} alt="Password_Logo"/>
                        </div>
                        </div>
                        <input type="submit" className="signin_button" value="Login Now"/>
                    </form>
                </div>
                <div className="signin-flex-2">
                    <img src={Lockillustration} alt="Illustration" />
                </div>
            </div>
        </div>
    )
}

export default SignIn