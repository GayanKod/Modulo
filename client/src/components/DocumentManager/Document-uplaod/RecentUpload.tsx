import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Documents } from "./Documents";
import DeleteIcon from "@mui/icons-material/Delete";
import PreviewIcon from "@mui/icons-material/Preview";
import axios from "axios";
import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";

// Import the styles
//import "@react-pdf-viewer/core/lib/styles/index.css";
import { isAuth } from "../../../helpers/auth";

interface RecentUploadProps {
  docs: Documents[];
  setDocs: Dispatch<SetStateAction<Documents[]>>;
}

function RecentUpload(props: RecentUploadProps) {
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState<string>();
  //const [url, setUrl] = useState<string>();

  const uploads = props.docs.sort((x, y) =>
    x.documentId! > y.documentId! ? -1 : 1
  );

  useEffect(() => {
    axios
      .get("https://localhost:5000/api/File/get", {
        params: { userid: isAuth().id },
      })
      .then((response) => props.setDocs(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [props.docs]);

  if (loading) return <h2>Loading ...</h2>;
  if (props.docs == null) return <h2>No uploads yet</h2>;

  const deleteHandler = (docname: string | undefined) => {
    if (window.confirm("Are you sure you want to delete?")) {
      axios
        .delete("https://localhost:5000/api/File/delete", {
          params: { fileName: docname },
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error.response.data.errors));
    }
  };

  const viewHandler = (docname: string | undefined) => {
    axios
      .get("https://localhost:5000/api/File/view", {
        params: { filename: docname },
      })
      .then((response) => setFile(response.data))
      .catch((error) => console.log(error.response.data.errors));

    // const blob = base64toBlob(file);
    // setUrl(URL.createObjectURL(blob!));
  };

  return (
    <div className="RecentUpload">
      <table className="RecentUpload-table">
        <caption className="RecentUpload-table-caption">Recent Uploads</caption>
        <thead>
          <tr className="RecentUpload-table-headers">
            <th>Type</th>
            <th>Document Name</th>
            <th>Size(MB)</th>
            <th>Date</th>
            <th>Description</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {uploads.map((item) => (
            <tr key={item.documentId}>
              <td>{item.documentName?.split(".").pop()}</td>
              <td>{item.documentName?.split(".")[0]}</td>
              <td>{Math.round(item.documentSize! / (1024 * 1024))}</td>
              <td>{item.date?.toString().split("T")[0]}</td>
              <td>{item.description}</td>
              <td>
                <button
                  className="RecentUpload-table-viewButton"
                  onClick={() => viewHandler(item.documentName)}
                  disabled={
                    item.documentName?.split(".").pop() == "pdf" ? false : true
                  }
                >
                  <PreviewIcon />
                </button>
              </td>
              <td>
                <button
                  className="RecentUpload-table-deleteButton"
                  onClick={() => deleteHandler(item.documentName)}
                >
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="pdf-viewer">
        {file && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
            <Viewer fileUrl={file!} />
          </Worker>
        )}
        {!file && <>No File</>}
      </div> */}
    </div>
  );
}
export default RecentUpload;
