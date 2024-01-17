import React,{useState} from "react";
import axios from 'axios';
import './upload_fac_data.css'
const Upload_fac_data = ({user_email}) => {
    const [files, setFiles] = useState([]);
    const handleFileChange = (e) => {
        // Handle multiple file uploads
        setFiles([...files, ...e.target.files]);
      };

      const handleUpload = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const achievement_type = formData.get('achievement_type');
        const exp_date=formData.get('date');
        const achievement_details = formData.get('achievement_details');
        const achievement_title=formData.get('achievement_title');
        const promises = files.map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
              resolve({
                filename: file.name,
                data: event.target.result.split(',')[1],
              });
            };
            reader.onerror = (error) => {
              reject(error);
            };
            reader.readAsDataURL(file);
          });
        });
    
        Promise.all(promises)
          .then((base64DataArray) => {
            return axios.post('http://localhost:8000/upload-data-faculty', {
                user_email,
                achievement_type,
                files: base64DataArray,
                exp_date,
                achievement_details,
                achievement_title
              });
            })
            .then((response) => {
                console.log(response.data); // Handle the server response as needed
              })
          .catch((error) => {
            console.error('Error converting files to base64:', error);
          });
      };
    
    /*const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const achievement_type = formData.get('achievement_type');
        const exp_date=formData.get('date');
        const achievement_details = formData.get('achievement_details');
        const achievement_title=formData.get('achievement_title');
        const uploadData=new FormData();
        files.forEach((file, index) => {
            uploadData.append(`file${index + 1}`, file);
        });
        console.log(uploadData);
        try {
          // Perform authentication by sending a POST request to the server
          const response = await fetch('http://localhost:8000/upload-data-faculty', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: uploadData,
          });
          // Check if the request was successful (status code 2xx)
          if (response.ok) {
            console.log("OK");
          } else {
            // Handle authentication failure
            window.alert('Something is Wrong');
          }
        } catch (error) {
          console.error('Error during login:', error);
          window.alert('Internal Server Error. Please try again later.');
        }
      };*/
    return (
           <div className="container">
            <div className="content">
                <div className="upload_fac-head">Faculty Upload</div>
                <form onSubmit={handleUpload}>
                    <div className="upload_fac_line">
                        <div className="upload_fac_input">
                            <label>Achievement Type</label>
                            <select name="achievement_type">
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
                            <input type="date" name="date"/>
                        </div>
                    </div>
                    <div className="upload_fac_line">
                        <div className="upload_fac_input">
                            <label>Achievement Title</label>
                            <input type="text" name="achievement_title" placeholder=" Neural Networks"/>
                        </div>
                    </div>
                    <div className="upload_fac_line">
                        <div className="upload_fac_input">
                            <label>Achievement Details</label>
                            <input type="text" name="achievement_details" placeholder="The paper is published in IEEE on 12 th dec 2023"/>
                        </div>
                    </div>
                    <div className="upload_file_fac">
                        <input type="file" multiple onChange={handleFileChange} placeholder='upload'/>
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