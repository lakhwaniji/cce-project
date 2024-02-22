import React, { useState,useEffect } from "react";
import "./Dash.css";
import search from "../../assets/search-icon.svg";
import exp from "../../assets/export-icon.svg";
import DashModal from './DashModal';
import axios from 'axios';
import * as XLSX from 'xlsx';
const download = require("downloadjs");
const Dashboard = () => {

  const [fetchedData, setFetchedData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currItem, setCurrItem] = useState({});
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [type,setType]=useState('');
  const [faculty,setFaculty]=useState('');
  let exportedData=[];

  const fetchDataFromServer = async () => {
    
    try {
      const response = await axios.get('http://192.168.170.13:8000/getCredentials',{
        withCredentials:true,
      });
      
      // Assuming the data is an array, update the state
      setFetchedData(response.data.credentials);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const downloadDataFromServer = async () => {
    let uploads=[];
    let name=[];
    exportedData.forEach((item=>{
      item["files"].forEach((file)=>{
        uploads.push(file);
        name.push(`${item["Achievement_Title"]}_${item["Faculty_Incharge"]}`);
      })
    }))
    const url = new URL('http://192.168.170.13:8000/dwdAllCredentials');
    const fileListParam = uploads.join(',');
    const name_Param=name.join(',');
    url.searchParams.append('fileList', fileListParam);
    url.searchParams.append('nameParam', name_Param);
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
  };

  const combinePdf = async()=>{
    let uploads=[];
    let name=[];
    exportedData.forEach((item=>{
      item["files"].forEach((file)=>{
        uploads.push(file);
        name.push(`${item["Achievement_Title"]}_${item["Faculty_Incharge"]}`);
      })
    }))
    const url = new URL('http://192.168.170.13:8000/dwdCombinePdf');
    const fileListParam = uploads.join(',');
    const name_Param=name.join(',');
    url.searchParams.append('fileList', fileListParam);
    url.searchParams.append('nameParam', name_Param);
    const fetchOptions = {
      method: 'GET',
      credentials: 'include' // This will send cookies and HTTP authentication to the server
    };
    try {
      fetch(url,fetchOptions)
      const res = await  fetch(url,fetchOptions);
      const blob = await res.blob();
      download(blob, "Merged.pdf");
      
  } catch (error) {
    console.error('Error downloading files:', error);
  }
  }
  const exportData=()=>{
    console.log(exportedData);
      const ws = XLSX.utils.json_to_sheet(exportedData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, 'data.xlsx');
  }

    const onSetType=(e)=>{
      setType(e.target.value);
    }

    const onSetFaculty=(e)=>{
      setFaculty(e.target.value);
    }
  

  useEffect(() => {
    fetchDataFromServer();
    exportedData=[];
  },[]);


  return (
    <>
      <div className="container">
        <div className="content">
          <h6 className="dash-head mb-4">Dashbaord</h6>
          <div className="top">
            <div className="filtersDiv">
              <div
                className="form-check form-check-inline form-check-reverse"
                style={{ marginRight: "1.3rem" }}
              >
                <label
                  className="form-check-label ma"
                  htmlFor="myUpload"
                >
                  From Date
                </label>
                <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} style={{ marginLeft: "1.3rem" }}/>
              </div>
              <div
                className="form-check form-check-inline form-check-reverse"
              >
                <label
                  className="form-check-label ma"
                  htmlFor="myUpload"
                >
                  To Date
                </label>
                <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} style={{ marginLeft: "1.3rem" }}/>
              </div>
            </div>
            
            <div className="searchDiv">
              <span className="me-3">
                <strong>Achievement_Type</strong>
              </span>
              <div className="me-2">
                <input
                  type="search"
                  className="formInp"
                  placeholder="Enter text"
                  onChange={onSetType}
                />
              </div>
              <div>
                <img src={search} alt="" className="mb-2" />
              </div>
            </div>
          </div>

          <div className="filter2-div">
            <button className="Btn" onClick={exportData}>
              <img src={exp} alt=""/>
              Export
            </button>
            <button className="Btn" onClick={combinePdf}>
              <img src={exp} alt=""/>
              Combine_PDF
            </button>
            <button className="Btn" onClick={downloadDataFromServer}>
              <img src={exp} alt=""/>
              Download_Files
            </button>
            <div className="searchDiv">
              <span className="me-3">
                  <strong>Faculty_Incharge</strong>
                </span>
                <div className="me-2">
                  <input
                    type="search"
                    className="formInp"
                    placeholder="Enter text"
                    onChange={onSetFaculty}
                  />
                </div>
                <div>
                <img src={search} alt="" className="mb-2" />
              </div>
              </div>
          </div>

          <div className="bottom table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">Achievement Title</th>
                  <th scope="col">Faculty Incharge</th>
                  <th scope="col">Category</th>
                  <th scope="col">Achievement Type</th>
                  <th scope="col">Uploaded Date</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {fetchedData.map((item) => {
                  if(fromDate && toDate){
                    if(item["Publish_Date"]>=fromDate && item["Publish_Date"]<=toDate && (item["Achievement_Type"].toLowerCase().includes(type.toLowerCase())) && (item["Faculty_Incharge"].toLowerCase().includes(faculty.toLowerCase()))){
                      exportedData.push(item);
                      return (
                        <tr
                          onClick={() => {
                            setIsOpen(true);
                            setCurrItem(item);
                          }}
                          key={item._id}
                        >
                          <td>{item["Achievement_Title"]}</td>
                          <td>{item["Faculty_Incharge"]}</td>
                          <td>{item["category"]}</td>
                          <td>{item["Achievement_Type"]}</td>
                          <td>{item["Publish_Date"]}</td>
                        </tr>
                      );
                  }
                  else{
                    return null
                  } 

                    }
                    else{
                      if(item["Achievement_Type"].toLowerCase().includes(type.toLowerCase())&& (item["Faculty_Incharge"].toLowerCase().includes(faculty.toLowerCase()))){
                      exportedData.push(item);
                      return (
                        <tr
                          onClick={() => {
                            setIsOpen(true);
                            setCurrItem(item);
                          }}
                          key={item._id}
                        >
                          <td>{item["Achievement_Title"]}</td>
                          <td>{item["Faculty_Incharge"]}</td>
                          <td>{item["category"]}</td>
                          <td>{item["Achievement_Type"]}</td>
                          <td>{item["Publish_Date"]}</td>
                          <td>{"View"}</td>
                        </tr>
                      );
                        }
                      else{
                        return null
                      }
                    }
                   
                })}
              </tbody>
            </table>
          </div>
          <DashModal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            item={currItem}
          />
        </div>
        <footer>
            © [2023] | This project is developed by a student's of Manipal University Jaipur | Designed for Department of CCE | All rights reserved
        </footer>
      </div>
    </>
  );
};

export default Dashboard;
