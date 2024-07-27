import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    
      onSearch(e.target.value);
    
  };

  return (
    <input
      type="text"
      placeholder="Search retreats by title"
      onChange={handleSearch}
      className="p-2 border rounded w-full mb-4"
    />
  );
};

export default SearchBar;
