import React from 'react'
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {

  logout = () => {
    window.localStorage.removeItem('read-me-user-token')
    this.props.history.push("/")
  }

  render() {
    return (

      <Menu fluid widths={3}>
        <Menu.Item onClick={_ => this.props.history.push("/books/my-books")} as="a" name="my-books" className="nav-item">
          My Books
        </Menu.Item>

        <Menu.Item onClick={_ => this.props.history.push("/books/search-books")} as="a" name="search" className="nav-item">
          Search
        </Menu.Item>

        <Menu.Item as="a" onClick={this.logout} name="login" className="nav-item">
          Logout

        </Menu.Item>


      </Menu>

    )
  }
}
export default withRouter(Navbar)
//
// class Navbar extends React.Component{
//
//   render(){
//     return(
//       <div>
//         <button> Login </button>
//         <button> My Books </button>
//         <h2> Hello, it's me, Navbar. </h2>
//
//
//
//
//       </div>
//
//
