import React, { useState } from "react";
import "./Dash.css";
import search from "../../assets/search-icon.svg";
import exp from "../../assets/export-icon.svg";
import data from "../../sample-data/dash-data.json";
import DashModal from "./DashModal";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currItem, setCurrItem] = useState({});
  const [myUploadFilter, setMyUploadFilter] = useState(false);
  const [studentUploadFilter, setStudentUploadFilter] = useState(false);
  return (
    <>
      <div className="container">
        <div className="content">
          <h6 className="dash-head mb-4">Dashbaord</h6>

          <div className="top">
            <div className="filtersDiv">
              <div className="me-3">
                <strong>Filters</strong>
              </div>

              <div
                className="form-check form-check-inline form-check-reverse"
                style={{ marginRight: "1.3rem" }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="myUpload"
                  id="myUpload"
                  onChange={() => setMyUploadFilter(!myUploadFilter)}
                />
                <label className="form-check-label" htmlFor="myUpload">
                  My Upload
                </label>
              </div>
              <div
                className="form-check form-check-inline form-check-reverse"
                style={{ marginRight: "1.3rem" }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="tudentUpload"
                  id="studentUpload"
                  onChange={() => setStudentUploadFilter(!studentUploadFilter)}
                />
                <label className="form-check-label" htmlFor="studentUpload">
                  Student Upload
                </label>
              </div>
            </div>
            <div className="searchDiv">
              <span className="me-3">
                <strong>Search</strong>
              </span>
              <div className="me-2">
                <input
                  type="search"
                  className="formInp"
                  placeholder="Enter text"
                />
              </div>
              <div>
                <img src={search} alt="" className="mb-2" />
              </div>
            </div>
          </div>

          <div className="exportBtn-div">
            <button className="expBtn">
              <img src={exp} alt="" />
              Export
            </button>
          </div>

          <div className="bottom table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">Achievement Title</th>
                  <th scope="col">Faculty Incharge</th>
                  <th scope="col">Achievement Type</th>
                  <th scope="col">Uploaded Date</th>
                  <th scope="col">View</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {!myUploadFilter &&
                  !studentUploadFilter &&
                  data.map((item) => {
                    return (
                      <tr
                        onClick={() => {
                          setIsOpen(true);
                          setCurrItem(item);
                        }}
                        key={item.id}
                      >
                        <td>{item["Achievement Title"]}</td>
                        <td>{item["Faculty Incharge"]}</td>
                        <td>{item["Achievement Type"]}</td>
                        <td>{item["Uploaded Date"]}</td>
                        <td>{item.View}</td>
                      </tr>
                    );
                  })}
                {myUploadFilter &&
                  !studentUploadFilter &&
                  data
                    .filter((item) => {
                      if (item["Student Upload"]) {
                        return false;
                      } else return true;
                    })
                    .map((item) => {
                      return (
                        <tr
                          onClick={() => {
                            setIsOpen(true);
                            setCurrItem(item);
                          }}
                          key={item.id}
                        >
                          <td>{item["Achievement Title"]}</td>
                          <td>{item["Faculty Incharge"]}</td>
                          <td>{item["Achievement Type"]}</td>
                          <td>{item["Uploaded Date"]}</td>
                          <td>{item.View}</td>
                        </tr>
                      );
                    })}
                {studentUploadFilter &&
                  !myUploadFilter &&
                  data
                    .filter((item) => {
                      if (item["Student Upload"]) {
                        return true;
                      } else return false;
                    })
                    .map((item) => {
                      return (
                        <tr
                          onClick={() => {
                            setIsOpen(true);
                            setCurrItem(item);
                          }}
                          key={item.id}
                        >
                          <td>{item["Achievement Title"]}</td>
                          <td>{item["Faculty Incharge"]}</td>
                          <td>{item["Achievement Type"]}</td>
                          <td>{item["Uploaded Date"]}</td>
                          <td>{item.View}</td>
                        </tr>
                      );
                    })}
                {myUploadFilter &&
                  studentUploadFilter &&
                  data.map((item) => {
                    return (
                      <tr
                        onClick={() => {
                          setIsOpen(true);
                          setCurrItem(item);
                        }}
                        key={item.id}
                      >
                        <td>{item["Achievement Title"]}</td>
                        <td>{item["Faculty Incharge"]}</td>
                        <td>{item["Achievement Type"]}</td>
                        <td>{item["Uploaded Date"]}</td>
                        <td>{item.View}</td>
                      </tr>
                    );
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
      </div>
    </>
  );
};

export default Dashboard;
