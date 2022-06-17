import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Documents } from "./Documents";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

interface RecentUploadProps {
  docs: Documents[];
  setDocs: Dispatch<SetStateAction<Documents[]>>;
}

function RecentUpload(props: RecentUploadProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://localhost:5000/api/Document")
      .then((response) => props.setDocs(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Loading ...</h2>;
  if (props.docs == null) return <h2>No uploads yet</h2>;

  return (
    <div className="RecentUpload">
      <table className="RecentUpload-table">
        <caption className="RecentUpload-table-caption">Recent Uploads</caption>
        <thead>
          <tr className="RecentUpload-table-headers">
            <th>Type</th>
            <th>Document Name</th>
            <th>Document size</th>
            <th>Date</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.docs.map((item, index) => (
            <tr>
              <td>{item.documentName?.split(".").pop()}</td>
              <td key={index}>{item.documentName?.split(".")[0]}</td>
              <td>{item.documentSize}</td>
              <td>{item.date}</td>
              <td>{item.description}</td>
              <td>
                <button className="RecentUpload-table-deleteButton">
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default RecentUpload;
