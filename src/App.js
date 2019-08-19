import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import BooksContainer from './components/BooksContainer'
import Welcome from './components/Welcome'


class App extends Component {
  // login=(userLogin)=>{
  //   // LOGIN
  // }

  render() {
    return (
      <div className="App">
        <Route
          exact path="/"
          render={() => (
            <Welcome />
          )}
        />
        <Route
          path="/books"
          render={() => (
            <Fragment>
              <Header />
              <BooksContainer />
            </Fragment>
          )}
        />

      </div>
    );
  }
}

export default App;
