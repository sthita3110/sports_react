// SearchBar.js
import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="mt-2">
      <input
        type="text"
        className="p-2 w-80 ml-3 mr-3 rounded-3xl border border-2"
        placeholder="Enter your search query"
        value={query}
        onChange={handleInputChange}
      />
      <button
        onClick={handleSearch}
        className="bg-black text-white p-2 rounded-3xl"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
