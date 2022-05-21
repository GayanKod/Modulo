import DocumentDownloadTitle from "../components/DocumentManager/Document-download/DocumentDownloadTitle";
import DocumentSearch from "../components/DocumentManager/Document-download/DocumentSearch";
import "../styles/DocumentDownloader.scss";
function DocumentDownload() {
  return (
    <div className="DocumentDownloader">
      <DocumentDownloadTitle />
      <DocumentSearch />
    </div>
  );
}

export default DocumentDownload;
