import React,{useState} from "react";
import axios from 'axios';
import './upload_fac_data.css';
const Upload_fac_data = () => {
  const [files, setFiles] = useState(null);
  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      /*for (let i = 0; i < files.length; i++) {
        //console.log(files)
        
      }*/
      const data=Object.values(files);
      formData.append('files', data);
       //Make a POST request to the Express server
      const response = await axios.post('http://192.168.170.13:8000/createFacCredentials', formData, {withCredentials: true ,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      console.log(response.data.message);
      window.alert(response.data.message);
      const form=document.getElementById("faculty_form");
      form.reset();
    } catch (error) {
      console.error('Error uploading files:', error.message);
      window.alert(error.message);
    }
  };
    return (
           <div className="container">
            <div className="content">
                <div className="upload_fac-head">Faculty Upload</div>
                <form onSubmit={handleUpload} id="faculty_form">
                    <div className="upload_fac_line">
                        <div className="upload_fac_input">
                            <label>Achievement Type</label>
                            <select name="Achievement_Type">
                                <option value="Certification">Certification</option>
                                <option value="Research_Paper">Research Paper</option>
                                <option value="Confrence_Paper">Confrence Paper</option>
                                <option value="Patent_Publication">Patent Publication</option>
                                <option value="Faculty_Development_Program">Faculty_Development_Program</option>
                                <option value="Award">Award</option>
                            </select>
                        </div>
                    </div>
                    <div className="upload_fac_line">
                    <div className="upload_fac_input">
                            <label>Published Date</label>
                            <input type="date" name="Publish_Date"/>
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
                        <input type="file" name="files" onChange={handleFileChange} multiple />
                    </div>
                    <div className='submission_fac'>
                        <button type='submit' >
                        Submit</button>
                    </div>
                </form>
            </div>
            <footer>
            © [2023] | This project is developed by a student's of Manipal University Jaipur | Designed for Department of CCE | All rights reserved
        </footer>
        </div>
    );
}

export default Upload_fac_data