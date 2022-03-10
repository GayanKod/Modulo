function DocumentSearch() {
  return (
    <div className="DocumentSearch">
      <input
        type="text"
        className="searchbar"
        placeholder="Search documents"
      ></input>
      <button type="submit" className="searchbutton">
        Search
      </button>
    </div>
  );
}

export default DocumentSearch;
