import { Dispatch, SetStateAction } from "react";
import { Documents } from "./Documents";
import DeleteIcon from "@material-ui/icons/Delete";

interface RecentUploadProps {
  docs: Documents[];
  setDocs: Dispatch<SetStateAction<Documents[]>>;
}

function RecentUpload(props: RecentUploadProps) {
  return (
    <div className="RecentUpload">
      <table className="RecentUploadTable">
        <caption className="RecentUploadCaption">Recent Uploads</caption>
        <thead>
          <tr className="tableHeaders">
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
                <button className="DeleteButton">
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
