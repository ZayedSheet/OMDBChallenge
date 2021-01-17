import React, { createContext, useContext, useState } from 'react';
const Context = createContext();

export const useDataProvider = () => useContext(Context);

export default ({ children }) => {
  const [nominations, setNominations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");
  

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