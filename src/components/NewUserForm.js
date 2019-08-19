import React, {Component} from 'react';
import { Form } from 'semantic-ui-react';


class NewUserForm extends Component{
    state={
        username:"",
        email:"",
        password:""
    }

    handleChangeUsername = event =>{
        this.setState({username:event.target.value})
    }

    handleChangePassword = event =>{
        this.setState({password:event.target.value})
    }

    handleChangeEmail = event =>{
        this.setState({email:event.target.value})
    }

    newUser = (user) => {
        // console.log(book)
        fetch(`${BASE_URL}/user MORE TO URL`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }, body: JSON.stringify({
                    username:user.username,
                    email:user.email,
                    password:user.password
                })
            })
            .then(resp => resp.json())
            // .then(REDIRECT TO USER HOME PAGE????)


    }

    render(){
        return(
            <div>
            <br/>
            <h1>Sign Up</h1>
            <br/>
            <Form onSubmit={() => this.props.createUser(this.state)}>
                <Form.Group widths="equal">
                    <Form.Input placeholder="Enter your username" onChange={this.handleChangeUsername} value={this.state.username}/>
                    <Form.Input placeholder="Enter your email address" onChange={this.handleChangeEmail} value={this.state.email}/>
                    <Form.Input placeholder="Enter your password" onChange={this.handleChangePassword} value={this.state.password}/>
                </Form.Group>
                <br/>
                <Form.Button>Create Account</Form.Button>
                </Form>
                <br/>

        </div>
        )
    }
}

export default NewUserForm
