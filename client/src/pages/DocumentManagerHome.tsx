import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../components/Navbar2";
import "../styles/DocumentManagerHome.scss";
import UploadImg from "../assets/img/UploadImg.png";
import DownloadImg from "../assets/img/DownloadImg.png";

function DocumentManagerHome() {
  return (
    <div className="DocumentManagerHome">
      <Navbar2 />
      <div className="DocumentManager-title">
        <h1 className="DocumentManager-title-main">Document Manager - </h1>
        <h2 className="DocumentManager-title-sub">Home Page</h2>
      </div>
      <div
        className="DocumentManagerHome-sections"
        style={{ padding: "5% 10%" }}
      >
        <Link to="/document-upload">
          <div className="DocumentManagerHome-sections-buttons">
            <img
              src={UploadImg}
              alt="upload-img"
              style={{ height: "200px", width: "200px" }}
            />
            <h2 className="DocumentManagerHome-sections-title">
              Document Upload <div> Section</div>
            </h2>
          </div>
        </Link>
        <Link to="/document-download">
          <div className="DocumentManagerHome-sections-buttons">
            <img
              src={DownloadImg}
              alt="download-img"
              style={{ height: "200px", width: "200px" }}
            />
            <h2 className="DocumentManagerHome-sections-title">
              Document Download Section
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DocumentManagerHome;
