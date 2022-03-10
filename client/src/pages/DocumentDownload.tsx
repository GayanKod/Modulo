import DocumentSearch from "../components/DocumentManager/Document-download/DocumentSearch";
import "../styles/DocumentDownloader.scss";
function DocumentDownload() {
  return (
    <div className="DocumentDownloader">
      <div className="DocumentManager-title">
        <h1 className="main-title">Document Manager - </h1>
        <h2 className="sub-title">Upload section</h2>
      </div>
      <DocumentSearch />
    </div>
  );
}

export default DocumentDownload;
