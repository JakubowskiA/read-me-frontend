import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import BooksContainer from './components/BooksContainer'

function App() {

  
  return (
    <div className="App">
      <Header />
      <BooksContainer />
    </div>
  );
}

export default App;
