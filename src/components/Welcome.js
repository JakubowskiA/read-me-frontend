import React, {Component} from 'react';
import { Form } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';

class Welcome extends Component{
    state={
        username:"",
        password:""
    }
render(){
    return(
        <div className="book-background">
            <div className="login-card">
                <div className="login-card-inner">
            <Card >
            <br/>
            <h1>Sign In</h1>
            <br/>
            <Form onSubmit={() => this.props.login(this.state)} >
                
                    <Form.Field>
                    <Form.Input placeholder="Enter your username" onChange={this.handleChangeUsername} value={this.state.username}/>
                    </Form.Field>
                    <br/>
                    <Form.Field>
                    <Form.Input placeholder="Enter your password" onChange={this.handleChangePassword} value={this.state.password}/>
                    </Form.Field>
                
                <br/>
                <Form.Button>Submit</Form.Button>
                </Form>
                
                <h3>New User?</h3>
                <h3><a src='./NewUserForm'>Sign up here!</a></h3>
                <br/>
                </Card>
                </div>
                </div>
        </div>
    )
}
}

export default Welcome