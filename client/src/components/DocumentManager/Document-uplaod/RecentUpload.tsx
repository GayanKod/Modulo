import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Documents } from "./Documents";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isAuth } from "../../../helpers/auth";

interface RecentUploadProps {
  docs: Documents[];
  setDocs: Dispatch<SetStateAction<Documents[]>>;
}

function RecentUpload(props: RecentUploadProps) {
  const [loading, setLoading] = useState(true);
  const [isall, setIsall] = useState(false);

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

  const showAllorLess = () => {
    setIsall(!isall);
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
            <th>Delete</th>
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

                  <td>
                    <button
                      className="RecentUpload-table-deleteButton"
                      onClick={() => deleteHandler(item.documentName)}
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))
            : uploads.slice(0, 3).map((item) => (
                <tr key={item.documentId}>
                  <td>{item.documentName?.split(".").pop()}</td>
                  <td>{item.documentName?.split(".")[0]}</td>
                  <td>{Math.round(item.documentSize! / (1024 * 1024))}</td>
                  <td>{item.date?.toString().split("T")[0]}</td>
                  <td>{item.description}</td>

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

      <button className="RecentUpload-showall-less" onClick={showAllorLess}>
        {isall ? "Show Less" : "Show all"}
      </button>
    </div>
  );
}
export default RecentUpload;
