import React, {Component} from 'react';
import { Form } from 'semantic-ui-react';

class Welcome extends Component{
    state={
        username:"",
        password:""
    }
render(){
    return(
        <div>
            <br/>
            <h1>Sign In</h1>
            <br/>
            <Form onSubmit={() => this.props.login(this.state)}>
                <Form.Group widths="equal">
                    <Form.Input placeholder="Enter your username" onChange={this.handleChangeUsername} value={this.state.username}/>
                    <Form.Input placeholder="Enter your password" onChange={this.handleChangePassword} value={this.state.password}/>
                </Form.Group>
                <br/>
                <Form.Button>Submit</Form.Button>
                </Form>
                <br/>
                <h4>New User?</h4>
                <a src='./NewUserForm'>Sign up here!</a>
        </div>
    )
}
}

export default Welcome