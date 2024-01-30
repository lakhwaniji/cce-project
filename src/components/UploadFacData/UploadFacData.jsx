import React,{useState} from "react";
import axios from 'axios';
import './upload_fac_data.css'
const Upload_fac_data = ({user_email}) => {
    return (
           <div className="container">
            <div className="content">
                <div className="upload_fac-head">Faculty Upload</div>
                <form action="/createFacCredential" method="POST" encType="multipart/form-data">
                    <div className="upload_fac_line">
                        <div className="upload_fac_input">
                            <label>Achievement Type</label>
                            <select name="Achievement_Type">
                                <option value="certification">Certification</option>
                                <option value="research_paper">Research Paper</option>
                                <option value="confrence_paper">Confrence Paper</option>
                                <option value="patent_publication">Patent Publication</option>
                                <option value="award">Award</option>
                            </select>
                        </div>
                    </div>
                    <div className="upload_fac_line">
                    <div className="upload_fac_input">
                            <label>Expiry Date</label>
                            <input type="date" name="Expiry_Date"/>
                        </div>
                    </div>
                    <div className="upload_fac_line">
                        <div className="upload_fac_input">
                            <label>Achievement Title</label>
                            <input type="text" name="Achievement_Title" placeholder=" Neural Networks"/>
                        </div>
                    </div>
                    <div className="upload_fac_line">
                        <div className="upload_fac_input">
                            <label>Achievement Details</label>
                            <input type="text" name="Achievement_Details" placeholder="The paper is published in IEEE on 12 th dec 2023"/>
                        </div>
                    </div>
                    <div className="upload_file_fac">
                        <input type="file" name="files" id="files" placeholder='upload' multiple />
                    </div>
                    <div className='submission_fac'>
                        <button type='submit'>
                        Submit</button>
                    </div>
                </form>
            </div>
            <footer>
            © [2023] [Love, Aadhya, Ananya, Vedansh] | This project is developed by a student's of Manipal University Jaipur | Designed for Department of CCE | All rights reserved
        </footer>
        </div>
    );
}

export default Upload_fac_data