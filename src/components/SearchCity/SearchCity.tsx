import React, { useState } from 'react';
import './SearchCity.css';
import { CiSearch } from 'react-icons/ci';

function SearchCity() {
  const [searchValue, setSearchValue] = useState('');

  const inputChangesHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (searchValue) {
      // TODO send the value to api
    } else {
      alert('Please provide some value');
    }
  };

  return (
    <form onSubmit={submitHandler} data-testid="sc-form" className="search-city">
      <input
        type="text"
        placeholder="Please type to the search value"
        defaultValue={searchValue}
        onChange={inputChangesHandler}
        data-testid="sc-input"
        className="search-input"></input>
      <button aria-label="search city" data-testid="sc-button" className="search-button">
        <CiSearch aria-label="search icon" className="search-icon"/>
      </button>
    </form>
  );
}

export default SearchCity;
