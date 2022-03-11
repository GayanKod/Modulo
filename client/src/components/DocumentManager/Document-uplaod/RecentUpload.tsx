import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction, useState } from "react";
import { Documents } from "./Documents";

type RecentUploadProps = {
  docs: Documents[];
  setDocs: Dispatch<SetStateAction<Documents[]>>;
};

function RecentUpload(props: RecentUploadProps) {
  return (
    <div className="RecentUpload">
      <table className="RecentUploadTable">
        <caption className="RecentUploadCaption">Recent Uploads</caption>
        <tr className="tableHeaders">
          <th>Type</th>
          <th>Document Name</th>
          <th>Document size</th>
          <th>Date</th>
          <th>Description</th>
          <th>Delete</th>
        </tr>
        {props.docs.map((item, index) => (
          <tr>
            <td>{item.type}</td>
            <td key={index}>{item.name}</td>
            <td>{item.size}</td>
            <td>{item.date}</td>
            <td>{item.description}</td>
            <td>
              <button className="DeleteButton">
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default RecentUpload;
