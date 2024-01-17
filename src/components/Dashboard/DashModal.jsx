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
                key === "Achievement Title" ||
                key === "Faculty Incharge" ||
                key === "Published Date" ||
                key === "Expiry Date" ||
                key === "Achievement Details"
              ) {
                return (
                  <div key={item.id} className="liItem">
                    <strong>{key}</strong> - <strong>{item[key]}</strong>
                  </div>
                );
              }
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
