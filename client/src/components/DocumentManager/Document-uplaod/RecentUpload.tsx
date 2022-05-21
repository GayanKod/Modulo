import { Dispatch, SetStateAction } from "react";
import { Documents } from "./Documents";
import DeleteIcon from '@mui/icons-material/Delete';

interface RecentUploadProps {
  docs: Documents[];
  setDocs: Dispatch<SetStateAction<Documents[]>>;
}

function RecentUpload(props: RecentUploadProps) {
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
              <td>{item.type}</td>
              <td key={index}>{item.name}</td>
              <td>{item.size}</td>
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
