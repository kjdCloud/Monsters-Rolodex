import React from "react";
import "./search-box-style.css";

const SearchBox = function(props) {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={props.placeholder}
        onChange={props.handleClick}
      />
      ;
    </div>
  );
};
export default SearchBox;
