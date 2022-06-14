import GirlImg from "../../../../src/assets/img/SearchbarGirl.png";

function DocumentSearch() {
  return (
    <div className="DocumentSearch">
      <input
        type="text"
        className="DocumentSearch-searchbar"
        placeholder="Search documents"
      ></input>

      <button type="submit" className="DocumentSearch-searchbutton">
        Search
      </button>
    </div>
  );
}

export default DocumentSearch;
