import React, { createContext, useContext, useState, useEffect } from 'react';
const Context = createContext();

export const useDataProvider = () => useContext(Context);

export default ({ children }) => {
  const [nominations, setNominations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedState = localStorage.getItem('saveState');
    console.log(savedState);
    if(savedState){setNominations(JSON.parse(savedState))};
  }, []);

  useEffect(() => {
    localStorage.setItem('saveState', JSON.stringify(nominations));
  }, [nominations]);

  const store = {
    searchStore: {
      "search": search,
      "setSearch": setSearch,
      "results": searchResults,
      "setResults": setSearchResults
    },
    nominationStore: {
      "nominations": nominations,
      "setNominations" : setNominations
    }
  }


  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  );
}