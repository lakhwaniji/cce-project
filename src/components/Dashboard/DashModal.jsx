import React from "react";
import "./DashModal.css";
import { IoClose } from "react-icons/io5";
import exp from "../../assets/export-icon.svg";

const DashModal = ({ open, onClose, item }) => {
  if (!open) return null;
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="closeBtnDiv">
            <button className="closeBtn" onClick={onClose}>
              <IoClose />
            </button>
          </div>
          <div className="modalContent">
            {console.log(item)}
            {Object.keys(item).map((key) => {
              if (
                key==="Achievement_Type"||
                key === "Achievement_Title" ||
                key === "Faculty_Incharge" ||
                key === "Publish_Date" ||
                key === "Achievement_Details"||
                key==="Student_Name"||
                key==="Student_Batch"||
                key==="Student_Branch"||
                key==="Student_Reg"
              ) {
                return (
                  <div key={item._id} className="liItem">
                    <strong>{key}</strong> - <strong>{item[key]}</strong>
                  </div>
                );
              }
            return ""
            })}
          </div>
          <div className="listDiv">
            <div className="downloadBtn-div">
              <button className="dwdBtn">
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
