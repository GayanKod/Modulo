import { type } from "os";
import React, { useState } from "react";
import "../styles/DocumentUploader.scss";
import FileSelector from "../components/DocumentManager/Document-uplaod/FileSelector";
import RecentUpload from "../components/DocumentManager/Document-uplaod/RecentUpload";
import DocumentUploadTitle from "../components/DocumentManager/Document-uplaod/DocumentUploadTitle";
import Navbar2 from "../components/Navbar2";

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
    <>
      <Navbar2 />
      <div className="DocumentUploader">
        <DocumentUploadTitle />
        <FileSelector docs={documents} setDocs={setDocuments} />
        <br />
        <RecentUpload docs={documents} setDocs={setDocuments} />
      </div>
    </>
  );
}

export default DocumentUpload;
