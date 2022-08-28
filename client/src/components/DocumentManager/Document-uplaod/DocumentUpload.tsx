import { useState } from "react";
import "../../../styles/DocumentUploader.scss";
import FileSelector from "./FileSelector";
import RecentUpload from "./RecentUpload";
import DocumentUploadTitle from "./DocumentUploadTitle";
import Navbar2 from "../../../components/Navbar2";
import { Documents } from "./Documents";

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
