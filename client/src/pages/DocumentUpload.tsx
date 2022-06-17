import React, { useState } from "react";
import "../styles/DocumentUploader.scss";
import FileSelector from "../components/DocumentManager/Document-uplaod/FileSelector";
import RecentUpload from "../components/DocumentManager/Document-uplaod/RecentUpload";
import DocumentUploadTitle from "../components/DocumentManager/Document-uplaod/DocumentUploadTitle";
import Navbar2 from "../components/Navbar2";
import { Documents } from "../components/DocumentManager/Document-uplaod/Documents";

function DocumentUpload() {
  const [documents, setDocuments] = useState<Documents[]>([]);

  return (
    <div className="DocumentUploader">
      <Navbar2 />
      <DocumentUploadTitle />
      <FileSelector docs={documents} setDocs={setDocuments} />
      <br />
      <RecentUpload docs={documents} setDocs={setDocuments} />
    </div>
  );
}

export default DocumentUpload;
