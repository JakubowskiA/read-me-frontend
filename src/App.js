import React from 'react';
import logo from './logo.svg';
// import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import BooksContainer from './components/BooksContainer'
import Welcome from './components/Welcome'


function App() {
  // login=(userLogin)=>{
  //   // LOGIN
  // }

  
  return (
    <div className="App">
      <Header />
      <BooksContainer />
      <Welcome />
    </div>
  );
}

export default App;
