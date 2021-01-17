import {AppProvider} from "@shopify/polaris";
import en from '@shopify/polaris/locales/en.json';

import DataProvider from 'DataStore/DataProvider';

import "@shopify/polaris/dist/styles.css";
import './App.css';

function App() {

  return (
    <DataProvider>
      <AppProvider i18n={en}>
        <div className="App">
        </div>
      </AppProvider>
    </DataProvider>
  );
}

export default App;
