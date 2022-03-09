import { type } from "os";
import React, { useState } from "react";
import "../styles/DocumentUploader.scss";
import FileSelector from "../components/DocumentManager/Document-uplaod/FileSelector";
import RecentUpload from "../components/DocumentManager/Document-uplaod/RecentUpload";

function DocumentUpload() {
  const [documents, setDocuments] = useState([
    {
      name: "Hypothesis_Testing.pdf",
      size: "15MB",
      type: "PDF",
      date: "2022-01-19",
      description: "wgduegfierhgolrgj",
    },
    {
      name: "Boolean_Algebra.pdf",
      size: "9MB",
      type: "PDF",
      date: "2021-10-11",
      description: "wgduegfierhgobhjg uhihrg ghirhgorh",
    },
    {
      name: "ProjectProposalTemplate.ppt",
      size: "10MB",
      type: "ppt",
      date: "2021-05-05",
      description: "wgduegfierhgolrgj bjug gugiug huiggiuh gugugu huuihihljl",
    },
  ]);

  return (
    <div className="DocumentUploader">
      <div className="DocumentManager-title">
        <h1 className="main-title">Document Manager - </h1>
        <h2 className="sub-title">Upload section</h2>
      </div>
      <FileSelector docs={documents} setDocs={setDocuments} />
      <br />
      <RecentUpload docs={documents} setDocs={setDocuments} />
    </div>
  );
}

export default DocumentUpload;
