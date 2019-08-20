import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
const BASE_URL = "http://localhost:3000"

const BASE_URL = "http://localhost:3000"

class NewUserForm extends Component {
    state = {
        name: "",
        email: "",
        password: ""
    }

    handleChangeName = event => {
        this.setState({ name: event.target.value })
    }

    handleChangePassword = event => {
        this.setState({ password: event.target.value })
    }

    handleChangeEmail = event => {
        this.setState({ email: event.target.value })
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
                    name: user.name,
                    email: user.email,
                    password: user.password
                })
            })
            .then(resp => resp.json())
        // .then(REDIRECT TO USER HOME PAGE????)


    }

    render() {
        return (
            <div>
                <br />
                <h1>Sign Up</h1>
                <br />
                <Form onSubmit={() => this.props.createUser(this.state)}>
                    <Form.Group widths="equal">
                        <Form.Input placeholder="Enter your name" onChange={this.handleChangeName} value={this.state.name} />
                        <Form.Input placeholder="Enter your email address" onChange={this.handleChangeEmail} value={this.state.email} />
                        <Form.Input placeholder="Enter your password" onChange={this.handleChangePassword} value={this.state.password} />
                    </Form.Group>
                    <br />
                    <Form.Button>Create Account</Form.Button>
                </Form>
                <br />

            </div>
        )
    }
}

export default NewUserForm
