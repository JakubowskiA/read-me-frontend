import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import BooksContainer from './components/BooksContainer'
import Welcome from './components/Welcome'
import NewUserForm from './components/NewUserForm'

const BASE_URL = "http://localhost:3000"

class App extends Component {
  state = {
    user: {}
  }

  createUser = (user) => {
    fetch(`${BASE_URL}/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }, body: JSON.stringify({
          user: {
            name: user.name,
            email: user.email,
            password: user.password
          }
        })
      })
      .then(resp => resp.json())
      .then(data => {
        console.log('Response Data', data);
        localStorage.setItem('read-me-user-token', data.token);
        this.setState({ user: data.user });
        this.props.history.push('/books');
      })
  }

  login = (user) => {
    console.log(user)
    fetch(`${BASE_URL}/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }, body: JSON.stringify({
          email: user.email,
          password: user.password

        })
      })
      .then(resp => resp.json())
      .then(data => {
        if (Object.keys(data).length > 0) {
          console.log('Login response Data', data);
          localStorage.setItem('read-me-user-token', data.token);
          this.setState({ user: data.user });
          this.props.history.push('/books');
        }
      })
  }


  componentDidMount() {
    let token = localStorage.getItem('read-me-user-token');
    if (token) {
      fetch(`${BASE_URL}/retrieve_user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accepts: 'application/json',
          Authorization: `${token}`
        }
      })
        .then(resp => resp.json())
        .then(user => {
          this.setState({ user: user });
          this.props.history.push('/books');
        });
    } else {
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div className="App" >
        <Route
          exact path="/"
          render={() => (
            <Welcome login={this.login} />
          )}
        />
        <Route
          path="/sign-up"
          render={() => (
            <NewUserForm createUser={this.createUser} />
          )}
        />
        <Route
          path="/books"
          render={() => (
            <Fragment>
              <Header />
              <BooksContainer userId={this.state.user.id} />
            </Fragment>
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);

