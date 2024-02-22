import React,{useState} from 'react';
import "./upload_stu_data.css";
import axios from 'axios';

const Upload_stu_data = () => {
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
      const response = await axios.post('http://192.168.170.13:8000/createStuCredentials', formData, {withCredentials: true ,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      console.log(response.data.message);
      window.alert(response.data.message);
      const form=document.getElementById("student_form");
      form.reset();
    } catch (error) {
      console.error('Error uploading files:', error.message);
      window.alert(error.message);
    }
  };
    return (
        <div className="container">
            <div className="content">
                <div className="upload_stu-head">Student data</div>
                <form onSubmit={handleUpload} id="student_form">
                    <div className="upload_stu_line">
                        <div className="upload_stu_input">
                            <label>Student Name</label>
                            <input type="text" name="Student_Name" placeholder="Aakash Gupta"/>
                        </div>
                        <div className="upload_stu_input">
                            <label>Student Registration No</label>
                            <input type="text" name="Student_Reg" placeholder="219311033"/>
                        </div>
                    </div>
                    <div className="upload_stu_line">
                        <div className="upload_stu_input">
                            <label>Student Branch</label>
                            <select name="Student_Branch">
                                <option value="CCE">CCE</option>
                                <option value="IOT">IOT</option>
                            </select>
                        </div>
                        <div className="upload_stu_input">
                            <label>Student Batch</label>
                            <input type="text" name="Student_Batch" placeholder="2025 batch"/>
                        </div>
                    </div>

                    <div className="upload_fac-head"> Upload Data</div>

                    <div className="upload_stu_line">
                        <div className="upload_stu_input">
                            <label>Achievement Type</label>
                            <select name="Achievement_Type">
                                <option value="Certification">Certification</option>
                                <option value="Research_Paper">Research Paper</option>
                                <option value="Confrence_Paper">Confrence Paper</option>
                                <option value="Patent_Publication">Patent Publication</option>
                                <option value="Award">Award</option>
                            </select>
                        </div>
                        <div className="upload_stu_input">
                            <label>Published Date</label>
                            <input type="date" name="Publish_Date"/>
                        </div>
                    </div>
                    <div className="upload_stu_line">
                        <div className="upload_stu_input">
                            <label>Achievement Title</label>
                            <input type="text" name="Achievement_Title" placeholder=" Neural Networks"/>
                        </div>
                        <div className="upload_stu_input">
                            <label>Achievement Details</label>
                            <input type="text" name="Achievement_Details" placeholder="The paper is published in IEEE on 12 th dec 2023"/>
                        </div>
                    </div>
                    <div className="upload_file">
                        <input type="file" name="files" onChange={handleFileChange} multiple />
                    </div>
                    <div className='submission'>
                        <button type='submit'>
                        Submit</button>
                    </div>
                </form>
            </div>
            <footer>
            © [2023] | This project is developed by a student's of Manipal University Jaipur | Designed for Department of CCE | All rights reserved
        </footer>
        </div>
    );
};

export default Upload_stu_data;