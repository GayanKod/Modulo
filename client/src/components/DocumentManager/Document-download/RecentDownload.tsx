import React, { useState } from "react";

function RecentDownload() {
  const [documents, setDocuments] = useState([
    {
      name: "Hypothesis_Testing",
      size: "15MB",
      type: "pdf",
      date: "1/19/2021",
      description: "Questions from Hypothesis testing",
    },
    {
      name: "Boolean_Algebra",
      size: "9MB",
      type: "pdf",
      date: "10/11/2021",
      description: "Student note",
    },
  ]);
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
          {documents.map((item, index) => (
            <tr>
              <td>{item.type}</td>
              <td key={index}>{item.name}</td>
              <td>{item.size}</td>
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
