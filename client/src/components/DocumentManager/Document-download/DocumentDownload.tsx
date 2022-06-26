import { useState } from "react";
import DocumentDownloadTitle from "./DocumentDownloadTitle";
import DocumentSearch from "./DocumentSearch";
import RecentDownload from "./RecentDownload";
import { Documents } from "../Document-uplaod/Documents";
import Navbar2 from "../../Navbar2";
import "../../../styles/DocumentDownloader.scss";
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
