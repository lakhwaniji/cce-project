import React from "react";
import "./Dash.css";
import search from "../../assets/search-icon.svg";
import exp from "../../assets/export-icon.svg";
import data from "../../sample-data/dash-data.json";

const Dashboard = () => {
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
                style={{ "margin-right": "1.3rem" }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="myUpload"
                  id="myUpload"
                />
                <label className="form-check-label" htmlFor="myUpload">
                  My Upload
                </label>
              </div>
              <div
                className="form-check form-check-inline form-check-reverse"
                style={{ "margin-right": "1.3rem" }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="tudentUpload"
                  id="studentUpload"
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
            <table class="table table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">Achievement Title</th>
                  <th scope="col">Faculty Incharge</th>
                  <th scope="col">Achievement Type</th>
                  <th scope="col">Uploaded Date</th>
                  <th scope="col">View</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                {data.map((item) => {
                  return (
                    <tr>
                      <td>{item.Ach_title}</td>
                      <td>{item.Faculty_Incharge}</td>
                      <td>{item.Ach_type}</td>
                      <td>{item.Uploaded_date}</td>
                      <td>{item.View}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
