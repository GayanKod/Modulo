import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction, useState } from "react";

type RecentUploadProps = {
  docs: {
    name: string;
    size: string;
    type: string;
    date: string;
    description: string;
  }[];
  setDocs: Dispatch<
    SetStateAction<
      {
        name: string;
        size: string;
        type: string;
        date: string;
        description: string;
      }[]
    >
  >;
};

function RecentUpload(props: RecentUploadProps) {
  // const deleteHandler = (event: React.MouseEvent<HTMLElement>) => {
  //   {
  //     props.setDocs(props.docs.filter((d)=> d != ));
  //   }
  // };
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
