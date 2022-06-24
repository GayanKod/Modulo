import axios from "axios";
import React, { useEffect, useState } from "react";
import { isAuth } from "../../../helpers/auth";
import { Documents } from "../Document-uplaod/Documents";

function RecentDownload() {
  const [docs, setDocs] = useState<Documents[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://localhost:5000/api/File/get", {
        params: { userid: isAuth().id },
      })
      .then((response) => setDocs(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [docs]);
  return (
    <div className="RecentDownload">
      <table className="RecentDownload-table">
        <caption className="RecentDownload-table-caption">
          Recent Downloads
        </caption>
        <thead>
          <tr className="RecentDownload-table-headers">
            <th>Type</th>
            <th>Document Name</th>
            <th>Document size</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {docs.map((item) => (
            <tr key={item.documentId}>
              <td>{item.documentType}</td>
              <td>{item.documentName}</td>
              <td>{item.documentSize}</td>
              <td>{item.date}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default RecentDownload;
