import React from "react";
import "./styles/SearchItemStyle.css";

const SearchItem = ({ searchItem, setSearchItem }) => {
  return (
    <form
      className="authForm"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        placeholder="Search"
        type="text"
        id="searchInput"
        value={searchItem}
        autoComplete="off"
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
