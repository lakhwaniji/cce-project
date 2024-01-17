import React from "react";
import './FacultyUploadPage.css'
import ManipalLogo from '../../assets/logo.png'
const FacultyUploadPage = () => {
    return (
        <div className="faculty-upload">
            <div className="footer">
                <div className="loveaadhyaananyavedansh">
                    © [2023] [Love,Aadhya,Ananya,Vedansh] | This project is developed by a
                    student of Manipal University Jaipur | Designed for Department of CCE
                    | All rights reserved
                </div>
            </div>
            <div className="faculty-upload-parent">
                <div className="faculty-upload1">Faculty Upload</div>
                <div className="achivement-type-parent">
                    <div className="achivement-type">Achivement Type</div>
                    <div className="frame-child" />
                </div>
                <div className="expiry-date-parent">
                    <div className="achivement-type">Expiry Date</div>
                    <div className="frame-child" />
                </div>
                <div className="achievement-title-parent">
                    <div className="achivement-type">Achievement Title</div>
                    <div className="frame-child" />
                </div>
                <div className="details-parent">
                    <div className="achivement-type">Details</div>
                    <div className="frame-child" />
                </div>
                <div className="upload-button">
                    <img
                        className="carbonadd-filled-icon"
                        alt=""
                        src="/carbonaddfilled@2x.png"
                    />
                    <div className="achivement-type">Upload Documents</div>
                </div>
                <div className="upload-button1">
                    <div className="achivement-type">Submit</div>
                </div>
            </div>
            <div className="navbar">
                <div className="wrapper-rectangle-1-parent">
                    <div className="wrapper-rectangle-1">
                        <img src={ManipalLogo} alt="Manipal Logo" id="manipallogo" />
                    </div>
                    <div className="contact-us-wrapper">
                        <div className="contact-us">Contact Us</div>
                    </div>
                    <div className="home-wrapper">
                        <div className="home">Home</div>
                    </div>
                    <div className="about-us-wrapper">
                        <div className="about-us">About Us</div>
                    </div>
                    <div className="dash-board-wrapper">
                        <div className="dash-board">Dash Board</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FacultyUploadPage



