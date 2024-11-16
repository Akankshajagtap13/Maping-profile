import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-6 flex justify-center">
      <input
        type="text"
        className="border border-gray-300 rounded-lg p-2 w-1/2"
        placeholder="Search profiles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
