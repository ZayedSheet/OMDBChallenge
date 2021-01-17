import {AppProvider} from "@shopify/polaris";
import en from '@shopify/polaris/locales/en.json';
import AppBar from 'components/AppBar/app-bar';
import SearchBar from 'components/Search/search-bar';
import ResultsList from 'components/MovieList/results-list';
import NominationList from 'components/MovieList/nomination-list'

import DataProvider from 'DataStore/DataProvider';

import "@shopify/polaris/dist/styles.css";
import './App.css';

function App() {

  return (
    <DataProvider>
      <AppProvider i18n={en}>
        <div className="App">
          <AppBar></AppBar>
          <div className="app-body">
            <SearchBar></SearchBar>
            <ResultsList></ResultsList>
            <NominationList></NominationList>
          </div>
        </div>
      </AppProvider>
    </DataProvider>
  );
}

export default App;
