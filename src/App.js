import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import BooksContainer from './components/BooksContainer'
import Welcome from './components/Welcome'
import NewUserForm from './components/NewUserForm'

const BASE_URL = "http://localhost:3000"

class App extends Component {
  // login=(userLogin)=>{
  //   // LOGIN
  // }

  createUser=(user)=>{
    fetch(`${BASE_URL}/user MORE TO URL`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }, body: JSON.stringify({
                    name:user.name,
                    email:user.email,
                    password:user.password
                })
            })
            .then(resp => resp.json())
            // .then(REDIRECT TO USER HOME PAGE????)
  }

  render() {
    return (
      <div className="App">
        <Route
          exact path="/"
          render={() => (
            <Welcome login={this.login}/>
          )}
        />
        <Route
          path="/new-user"
          render={() => (
            <NewUserForm createUser={this.createUser}/>
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
