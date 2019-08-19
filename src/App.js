import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import BooksContainer from './components/BooksContainer'
import Welcome from './components/Welcome'


class App extends Component {

  state = {
    user: {}
  }

  signUpSubmit = (e, user) => {
    e.preventDefault();
    console.log('Sign Up User:', user);
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify({
        user: {
          name: "it me",
          email: 'test@test',
          password: 'test'
        }
      })
    })
      .then(resp => resp.json())
      .then(data => {
        console.log('Response Data', data);
        localStorage.setItem('token', data.token);
        this.setState({ user: data.user });
      });
  };
  render() {
    return (
      <div className="App">
        <Route
          exact path="/"
          render={() => (
            <Welcome signUpSubmit={this.signUpSubmit} />
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
