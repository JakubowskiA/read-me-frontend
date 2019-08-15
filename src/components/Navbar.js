import React from 'react'
import { Container, Image, Menu } from 'semantic-ui-react';

class Navbar extends React.Component{

  render(){
    return(
      <Menu>
        <Container>
          <Menu.Item as="a" name="my-books">
            My Books
          </Menu.Item>

          <Menu.Item as="a" name="search">
            Search
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item as="a" name="login">
              Login
            </Menu.Item>

            <Menu.Item as="a" name="register">
              Register
            </Menu.Item>

          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}
  export default Navbar
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
