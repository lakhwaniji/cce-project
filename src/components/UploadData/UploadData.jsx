import React from "react";
import ManipalLogo from '../../assets/logo.png'
import "./UploadData.css";

const UploadData = () => {
    return (
        <div className="upload-data">
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
            <div className="footer">
                <div className="loveaadhyaananyavedansh">
                    © [2023] [Love,Aadhya,Ananya,Vedansh] | This project is developed by a
                    student of Manipal University Jaipur | Designed for Department of CCE
                    | All rights reserved
                </div>
            </div>
            <div className="student-upload-parent">
                <div className="student-upload">Student Upload</div>
                <div className="student-name-parent">
                    <div className="student-name">Student Name</div>
                    <div className="frame-child" />
                </div>
                <div className="student-regno-parent">
                    <div className="student-name">Student RegNo</div>
                    <div className="frame-child" />
                </div>
                <div className="student-branch-parent">
                    <div className="student-name">Student Branch</div>
                    <div className="frame-child" />
                </div>
                <div className="student-batch-parent">
                    <div className="student-name">Student Batch</div>
                    <div className="frame-child" />
                </div>
                <div className="achivement-type-parent">
                    <div className="student-name">Achivement Type</div>
                    <div className="frame-child" />
                </div>
                <div className="expiry-date-parent">
                    <div className="student-name">Expiry Date</div>
                    <div className="frame-child" />
                </div>
                <div className="achievement-title-parent">
                    <div className="student-name">Achievement Title</div>
                    <div className="frame-child" />
                </div>
                <div className="details-parent">
                    <div className="student-name">Details</div>
                    <div className="frame-child" />
                </div>
                <div className="upload-button">
                    <img
                        className="carbonadd-filled-icon"
                        alt=""
                        src="/carbonaddfilled@2x.png"
                    />
                    <div className="student-name">Upload Documents</div>
                </div>
                <div className="upload-button1">
                    <div className="student-name">Submit</div>
                </div>
            </div> </div>
    );
};

export default UploadData;
