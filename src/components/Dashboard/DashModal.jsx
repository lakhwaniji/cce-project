import React from "react";
import "./DashModal.css";
import { IoClose } from "react-icons/io5";
import exp from "../../assets/export-icon.svg";
const DashModal = ({ open, onClose, item }) => {
  const download_files=async()=>{
    const title = item["Achievement_Title"];
    const fac=item["Faculty_Incharge"];
    const fileList=item["files"];
    const fileListParam = fileList.join(',');
    const url = new URL('http://192.168.170.13:8000/dwdCredentials');
    url.searchParams.append('fileList', fileListParam);
    url.searchParams.append('title', title);
    url.searchParams.append('fac', fac);
    const fetchOptions = {
      method: 'GET',
      credentials: 'include' // This will send cookies and HTTP authentication to the server
    };    
    try {
      fetch(url,fetchOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob(); // Assuming the response is JSON, adjust accordingly if it's not
      })
      .then(blob => {
        // Create a URL for the Blob
        const url = window.URL.createObjectURL(blob);
        // Create an anchor element
        const a = document.createElement('a');
        // Set the anchor's href attribute to the Blob URL
        a.href = url;
        // Set the anchor's download attribute to specify the filename
        a.download = 'filename.zip'; // Set the desired filename here
        // Append the anchor to the body
        document.body.appendChild(a);
        // Click the anchor to initiate the download
        a.click();
        // Remove the anchor from the body
        document.body.removeChild(a);
        // Revoke the URL to release the resources
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Error during fetch request:', error);
      });
  } catch (error) {
    console.error('Error downloading files:', error);
  }
  }
  if (!open) return null;
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="closeBtnDiv">
            <button className="closeBtn" onClick={onClose}>
              <IoClose/>
            </button>
          </div>
          <div className="modalContent">
            {Object.keys(item).map((data) => {
              if (
                data === "Achievement_Type"||
                data === "Achievement_Title" ||
                data === "Faculty_Incharge" ||
                data === "Publish_Date" ||
                data === "Achievement_Details"||
                data === "Student_Name"||
                data === "Student_Batch"||
                data === "Student_Branch"||
                data === "Student_Reg"||
                data === "_id"
               ) {
                return (
                  <div key={data} className="liItem">
                    <strong>{data}</strong> - <strong>{item[data]}</strong>
                  </div>
                );
              }
            return ""
            })}
          </div>
          <div className="listDiv">
            <div className="downloadBtn-div">
              <button className="dwdBtn" onClick={download_files}>
                <img src={exp} alt="" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashModal;
