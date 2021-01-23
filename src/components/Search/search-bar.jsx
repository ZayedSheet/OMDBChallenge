import React, {useCallback, useState} from 'react';
import {useDataProvider} from 'DataStore/DataProvider';
import {Icon, TextField, Button} from '@shopify/polaris';
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
    if(textFieldValue){
      const searchResults = await search(textFieldValue);

      const filteredResults = searchResults.data.Search.filter((movie) => movie.Type === "movie");

      searchStore.setResults(filteredResults);
      searchStore.setSearch(textFieldValue);
    } else {
      searchStore.setResults([]);
      searchStore.setSearch("");
    }
  }


  const textField = (
    <TextField
      onChange={handleTextFieldChange}
      value={textFieldValue}
      prefix={<Icon source={SearchMinor} color="inkLighter" />}
      placeholder="Search"
      helpText="Type in a movie and click enter to search"
    />
  );

  return (
    <div className="search">
      <div className="search-bar" onKeyDown={handleKeyPress}>
        <h1 className="search-title">Search for and nominate your favorite movies!</h1>
        {textField}
      </div>
    </div>
  );
}
