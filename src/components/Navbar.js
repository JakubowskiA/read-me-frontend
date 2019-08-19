import React from 'react'
import { Container, Image, Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {

  render() {
    return (
      <Menu>
        <Container>
          <Menu.Item onClick={_ => this.props.history.push("/my-books")} as="a" name="my-books" className="nav-item">
            My Books
          </Menu.Item>

          <Menu.Item onClick={_ => this.props.history.push("/search-books")} as="a" name="search" className="nav-item">
            Search
          </Menu.Item>

          {/* <Menu.Menu position="right"> */}
          <Menu.Item as="a" name="login" className="nav-item">
            Login
            </Menu.Item>

          <Menu.Item as="a" name="register" className="nav-item">
            Register
            </Menu.Item>

          {/* </Menu.Menu> */}
        </Container>
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
