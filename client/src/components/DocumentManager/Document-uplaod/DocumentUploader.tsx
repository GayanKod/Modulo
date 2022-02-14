import { type } from "os";
import React, { useState } from "react";
import "../../../styles/DocumentUploader.scss";
import FileSelector from "./FileSelector";

function DocumentUploader() {
  const [documents, setDocuments] = useState([
    { name: "Hypothesis_Testing.pdf", size: "15MB" },
    { name: "Boolean_Algebra", size: "9MB" },
    { name: "ProjectProposalTemplate.ppt", size: "10MB" },
  ]);

  return (
    <div className="DocumentUploader">
      <div className="DocumentManager-title">
        <h1 className="main-title">Document Manager - </h1>
        <h2 className="sub-title">Upload section</h2>
      </div>

      <FileSelector />
    </div>
  );
}

export default DocumentUploader;
