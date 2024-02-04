import React, { useState,useEffect } from "react";
import "./Dash.css";
import search from "../../assets/search-icon.svg";
import exp from "../../assets/export-icon.svg";
import DashModal from './DashModal';
import axios from 'axios';
import * as XLSX from 'xlsx';

const Dashboard = () => {

  const [fetchedData, setFetchedData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currItem, setCurrItem] = useState({});
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [title,setTitle]=useState('');
  const [faculty,setFaculty]=useState('');
  let exportedData=[];

  const fetchDataFromServer = async () => {
    try {
      // Make a request to your server to fetch data
      const response = await axios.get('http://localhost:8000/getCredentials',{
        withCredentials:true,
      });
      
      // Assuming the data is an array, update the state
      console.log(response.data.credentials);
      setFetchedData(response.data.credentials);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const exportData=()=>{
    console.log(exportedData);
      const ws = XLSX.utils.json_to_sheet(exportedData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, 'data.xlsx');
  }

    const onSetTitle=(e)=>{
      setTitle(e.target.value)
    }

    const onSetFaculty=(e)=>{
      setFaculty(e.target.value)
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
                <strong>Achievement_Title</strong>
              </span>
              <div className="me-2">
                <input
                  type="search"
                  className="formInp"
                  placeholder="Enter text"
                  onChange={onSetTitle}
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
                    if(item["Publish_Date"]>=fromDate && item["Publish_Date"]<=toDate && (item["Achievement_Title"].toLowerCase().includes(title.toLowerCase())) && (item["Faculty_Incharge"].toLowerCase().includes(faculty.toLowerCase()))){
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
                          <td>{item.View}</td>
                        </tr>
                      );
                  }
                  else{
                    return null
                  } 

                    }
                    else{
                      if(item["Achievement_Title"].toLowerCase().includes(title.toLowerCase())&& (item["Faculty_Incharge"].toLowerCase().includes(faculty.toLowerCase()))){
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
                          <td>{item.View}</td>
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
            © [2023] [Love, Aadhya, Ananya, Vedansh] | This project is developed by a student's of Manipal University Jaipur | Designed for Department of CCE | All rights reserved
        </footer>
      </div>
    </>
  );
};

export default Dashboard;
