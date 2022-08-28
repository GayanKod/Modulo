import { Dispatch, SetStateAction } from "react";
import { Documents } from "../Document-uplaod/Documents";
import girlImage from "../../../assets/img/SearchbarGirl.png";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import axios from "axios";
import { isAuth } from "../../../helpers/auth";

interface SearchResultProps {
  docs: Documents[];
  setDocs: Dispatch<SetStateAction<Documents[]>>;
  search: string;
  isEntered: boolean;
  setIsEntered: Dispatch<SetStateAction<boolean>>;
}
function SearchResult(props: SearchResultProps) {
  const downloadHandler = (docname: string | undefined, docid: number) => {
    axios
      .get("https://localhost:5000/api/File/download", {
        params: { filename: docname },
        responseType: "blob",
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", docname!);
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => console.log(error));

    axios
      .post("https://localhost:5000/api/File/addDownload", {
        userid: isAuth().id,
        documentid: docid,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.response.data.errors));
  };

  switch (props.isEntered) {
    case true:
      return (
        <>
          <div className="SeatchResult">
            <table className="SearchResult-table">
              <caption className="SearchResult-table-caption">
                Search Results
              </caption>
              <thead>
                <tr className="SearchResult-table-headers">
                  <th>Type</th>
                  <th>Document Name</th>
                  <th>Size</th>
                  <th>Description</th>

                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                {props.docs
                  .filter((doc) =>
                    doc.documentName
                      ?.toLowerCase()
                      .includes(props.search.toLowerCase())
                  )
                  .map((item) => (
                    <tr key={item.documentId}>
                      <td>{item.documentName?.split(".").pop()}</td>
                      <td>{item.documentName?.split(".")[0]}</td>
                      <td>{Math.round(item.documentSize! / (1024 * 1024))}</td>
                      <td>{item.description}</td>

                      <td>
                        <button
                          className="SearchResult-table-downloadButton"
                          onClick={() =>
                            downloadHandler(item.documentName, item.documentId!)
                          }
                        >
                          <FileDownloadIcon />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      );
    default:
      return (
        <>
          <img src={girlImage}></img>
        </>
      );
  }
}
export default SearchResult;
