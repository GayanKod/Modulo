import DocumentDownloadTitle from "../components/DocumentManager/Document-download/DocumentDownloadTitle";
import DocumentSearch from "../components/DocumentManager/Document-download/DocumentSearch";
import Navbar2 from "../components/Navbar2";
import "../styles/DocumentDownloader.scss";
function DocumentDownload() {
  return (
    <div className="DocumentDownloader">
      <Navbar2 />
      <DocumentDownloadTitle />
      <DocumentSearch />
    </div>
  );
}

export default DocumentDownload;
