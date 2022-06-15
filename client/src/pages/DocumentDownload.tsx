import { useState } from "react";
import DocumentDownloadTitle from "../components/DocumentManager/Document-download/DocumentDownloadTitle";
import DocumentSearch from "../components/DocumentManager/Document-download/DocumentSearch";
import RecentDownload from "../components/DocumentManager/Document-download/RecentDownload";
import Navbar2 from "../components/Navbar2";
import "../styles/DocumentDownloader.scss";
function DocumentDownload() {
  const [documents, setDocuments] = useState([
    {
      name: "Hypothesis_Testing",
      size: 15,
      type: "pdf",
      date: 8 / 6 / 2021,
      description: "Questions from Hypothesis testing",
    },
    {
      name: "Boolean_Algebra",
      size: 9,
      type: "pdf",
      date: 10 / 11 / 2021,
      description: "Student note",
    },
    {
      name: "ProjectProposalTemplate",
      size: 10,
      type: "ppt",
      date: 2 / 5 / 2022,
      description: "Template for hardware project proposal",
    },
  ]);

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
