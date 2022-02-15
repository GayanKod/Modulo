import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type RecentUploadProps = {
  docs: {
    name: string;
    size: string;
    type: string;
    date: string;
    description: string;
  }[];
};
function RecentUpload(props: RecentUploadProps) {
  return (
    <div className="RecentUpload">
      <table className="RecentUploadTable">
        <caption>Recent Uploads</caption>
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
              <FontAwesomeIcon icon={faTrashCan} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default RecentUpload;
