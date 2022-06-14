import React, { Dispatch, SetStateAction } from "react";
import { Documents } from "../Document-uplaod/Documents";
import girlImage from "../../../assets/img/SearchbarGirl.png";
interface SearchResultProps {
  docs: Documents[];
  setDocs: Dispatch<SetStateAction<Documents[]>>;
  search: string;
  isEntered: boolean;
}
function SearchResult(props: SearchResultProps) {
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
                  <th>Document size</th>
                  <th>Date</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {props.docs
                  .filter((doc) =>
                    doc.name.toLowerCase().includes(props.search)
                  )
                  .map((item, index) => (
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
