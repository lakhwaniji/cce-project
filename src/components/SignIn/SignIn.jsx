import React from "react";
<<<<<<< Updated upstream
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
=======
import "./signin.css";
import Lockillustration from "../../assets/lock_illustrations.jpg";
import ManipalLogo from "../../assets/logo.png";
import email from "../../assets/mail.svg";
import password from "../../assets/password.svg";
const SignIn = ({ setUser }) => {
  //api endpoint to login user
  const handleLogin = async (event) => {
    event.preventDefault();
>>>>>>> Stashed changes

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      // Perform authentication by sending a POST request to the server
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        const { token } = await response.json();

        // Decode the token to get user information
        const decodedUser = parseJwt(token);

        // Set the user in the parent component
        setUser(decodedUser);

        // Store the token in local storage for future use
        localStorage.setItem("token", token);
      } else {
        // Handle authentication failure
        window.alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      window.alert("Internal Server Error. Please try again later.");
    }
  };

  // Function to decode JWT token
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };
  return (
    <div className="signin-container">
      <div className="signin-flex">
        <div className="signin-flex-1">
          <img src={ManipalLogo} alt="Manipal Logo" />
          <div className="heading_signin">Enter Your Credentials</div>
          <form onSubmit={handleLogin}>
            <div className="input_box">
              <div className="label">Email Address</div>
              <div className="input_field">
                <input
                  name="email"
                  type="email"
                  placeholder="alex@jaipur.manipal.edu"
                />
                <img src={email} alt="Mail_Logo" />
              </div>
            </div>
            <div className="input_box">
              <div className="label">Password</div>
              <div className="input_field">
                <input
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
                />
                <img src={password} alt="Password_Logo" />
              </div>
            </div>

            {/* api endpoint to login user */}
            <input type="submit" className="signin_button" value="Login Now" />
          </form>
        </div>
        <div className="signin-flex-2">
          <img src={Lockillustration} alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
