import axios from "axios";
import React, { useEffect, useState } from "react";
import { isAuth } from "../../../helpers/auth";
import { Documents } from "../Document-uplaod/Documents";

function RecentDownload() {
  const [docs, setDocs] = useState<Documents[]>([]);
  const [loading, setLoading] = useState(true);
  const [isall, setIsall] = useState(false);
  useEffect(() => {
    axios
      .get("https://localhost:5000/api/File/getDownload", {
        params: { userid: isAuth().id },
      })
      .then((response) => setDocs(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [docs]);

  const uploads = docs.sort((x, y) => (x.documentId! > y.documentId! ? -1 : 1));

  const showAllorLess = () => {
    setIsall(!isall);
  };

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
            <th>Size(MB)</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {isall
            ? uploads.map((item) => (
                <tr key={item.documentId}>
                  <td>{item.documentName?.split(".").pop()}</td>
                  <td>{item.documentName?.split(".")[0]}</td>
                  <td>{Math.round(item.documentSize! / (1024 * 1024))}</td>
                  <td>{item.date?.toString().split("T")[0]}</td>
                  <td>{item.description}</td>
                </tr>
              ))
            : uploads.slice(0, 2).map((item) => (
                <tr key={item.documentId}>
                  <td>{item.documentName?.split(".").pop()}</td>
                  <td>{item.documentName?.split(".")[0]}</td>
                  <td>{Math.round(item.documentSize! / (1024 * 1024))}</td>
                  <td>{item.date?.toString().split("T")[0]}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
        </tbody>
      </table>
      <button className="RecentDownload-showall-less" onClick={showAllorLess}>
        {isall ? "Show Less" : "Show all"}
      </button>
    </div>
  );
}
export default RecentDownload;
