import { Dispatch, SetStateAction, useState } from "react";
import { useLinkClickHandler } from "react-router-dom";
import GirlImg from "../../../../src/assets/img/SearchbarGirl.png";
import { Documents } from "../Document-uplaod/Documents";
import SearchResult from "./SearchResult";

interface DocumentSearchProps {
  docs: Documents[];
  setDocs: Dispatch<SetStateAction<Documents[]>>;
}
function DocumentSearch(props: DocumentSearchProps) {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [isEntered, setIsEntered] = useState(false);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const clickHandler = () => {
    setSearch(input);
    setIsEntered(true);
  };
  return (
    <div className="DocumentSearch">
      <div className="DocumentSearch-fullBar">
        <input
          type="text"
          className="DocumentSearch-searchbar"
          placeholder="  Search documents"
          onChange={inputChangeHandler}
        ></input>

        <button
          type="submit"
          className="DocumentSearch-searchbutton"
          onClick={clickHandler}
        >
          Search
        </button>
      </div>
      <SearchResult
        docs={props.docs}
        setDocs={props.setDocs}
        search={search}
        isEntered={isEntered}
      />
    </div>
  );
}

export default DocumentSearch;
