import React from 'react';
import './App.css';
import SearchCity from './components/SearchCity/SearchCity';
import { LanguageContextProvider } from './context/LanguageContext/LanguageContext';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <LanguageContextProvider>
      <Header />
      <Layout>
        <h1 data-testid="a-title">Weather tracker</h1>
        <SearchCity />
       </Layout>
    </LanguageContextProvider>
  );
}

export default App;
