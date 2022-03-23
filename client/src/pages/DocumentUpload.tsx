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
      name: "Hypothesis_Testing",
      size: "15MB",
      type: "pdf",
      date: "1/19/2021",
      description: "Questions from Hypothesis testing",
    },
    {
      name: "Boolean_Algebra",
      size: "9MB",
      type: "pdf",
      date: "10/11/2021",
      description: "Student note",
    },
    {
      name: "ProjectProposalTemplate",
      size: "10MB",
      type: "ppt",
      date: "2/05/2022",
      description: "Template for hardware project proposal",
    },
  ]);

  return (
    <div className="DocumentUploader">
      <DocumentUploadTitle />
      <FileSelector docs={documents} setDocs={setDocuments} />
      <br />
      <RecentUpload docs={documents} setDocs={setDocuments} />
    </div>
  );
}

export default DocumentUpload;
