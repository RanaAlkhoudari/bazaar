import React from 'react';
import './searchBar.css';

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={'search products'}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
