import React, {useCallback, useState} from 'react';
import {useDataProvider} from 'DataStore/DataProvider';
import {Icon, TextField} from '@shopify/polaris';
import {SearchMinor} from '@shopify/polaris-icons';
import search from './search';

import "./search-bar.css";

export default function SearchBar() {

  const { searchStore } = useDataProvider();

  const [textFieldValue, setTextFieldValue] = useState('');

  const handleTextFieldChange = useCallback(
    (value) => {
      setTextFieldValue(value)
    },
    [],
  );

  const handleKeyPress = (event) => {
    const enterKeyPressed = event.keyCode === 13;
    if (enterKeyPressed) {
      event.preventDefault(); 
      handleSearch();
    }
  }

  const handleSearch = async () => {
    const searchResults = await search(textFieldValue);

    const filteredResults = searchResults.data.Search.filter((movie) => movie.Type === "movie");

    searchStore.setSearch(textFieldValue);
    searchStore.setResults(filteredResults);
  }


  const textField = (
    <TextField
      onChange={handleTextFieldChange}
      label="Search"
      value={textFieldValue}
      prefix={<Icon source={SearchMinor} color="inkLighter" />}
      placeholder="Search"
      helpText="Search for your favorite movies and shows!"
    />
  );

  return (
    <div className="search">
      <div className="search-bar" onKeyDown={handleKeyPress}>
        {textField}
      </div>
    </div>
  );
}
