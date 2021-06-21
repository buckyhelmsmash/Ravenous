import React, { useState } from 'react';

import './SearchBar.css';

export const SearchBar = (props) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
  };

  const handleSortByChange = (sortByOption) => {
    return () => setSortBy(sortByOption);
  };

  const getSortByClass = (sortByOptions) => {
    return sortBy === sortByOptions ? 'active' : '';
  };

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    props.searchYelp(term, location, sortBy);
    event.preventDefault();
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((option) => {
      let sortByOptionValue = sortByOptions[option];
      return (
        <li className={getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={handleSortByChange(sortByOptionValue)}>
          {option}
        </li>
      );
    });
  };

  return (
    <div className='SearchBar'>
      <div className='SearchBar-sort-options'>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className='SearchBar-fields'>
        <input placeholder='Search Businesses' onChange={handleTermChange} />
        <input placeholder='Where?' onChange={handleLocationChange} />
      </div>
      <div className='SearchBar-submit'>
        <a onClick={handleSearch}>Let's Go</a>
      </div>
    </div>
  );
};
