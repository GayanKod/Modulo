import { useState } from "react";
import DocumentDownloadTitle from "../components/DocumentManager/Document-download/DocumentDownloadTitle";
import DocumentSearch from "../components/DocumentManager/Document-download/DocumentSearch";
import RecentDownload from "../components/DocumentManager/Document-download/RecentDownload";
import { Documents } from "../components/DocumentManager/Document-uplaod/Documents";
import Navbar2 from "../components/Navbar2";
import "../styles/DocumentDownloader.scss";
function DocumentDownload() {
  const [documents, setDocuments] = useState<Documents[]>([]);

  return (
    <div className="DocumentDownloader">
      <Navbar2 />
      <DocumentDownloadTitle />
      <DocumentSearch docs={documents} setDocs={setDocuments} />
      <RecentDownload />
    </div>
  );
}

export default DocumentDownload;
