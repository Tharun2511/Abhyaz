import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Search = () => {
  return (
    <div id="SearchBar">
      <form action="">
        <div className="firstdiv">
          <div className="firstsearch">
            <div className="icon">
              <AiOutlineSearch />
            </div>
            <input
              type="text"
              className="input"
              placeholder="Search for Job, Location, type, etc..."
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
