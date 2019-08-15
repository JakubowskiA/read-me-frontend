import React, {Component} from 'react';
import { Form } from 'semantic-ui-react';


class SearchForm extends Component{
    state={
        // searchInputTitle:'',
        searchInputAuthor:'',
        // searchInputGenre:'' 
    }

    // handleChangeTitle = event =>{
    //     this.setState({searchInputAuthor:event.target.value})
    // }

    handleChangeAuthor = event =>{
        this.setState({searchInputAuthor:event.target.value})
    }

    // handleChangeGenre = event =>{
    //     this.setState({searchInputAuthor:event.target.value})
    // }


    render(){
        return(
            <div>
                <Form onSubmit={() => this.props.handleSubmit(this.state)}>
                <Form.Group widths="equal">
                    {/* <Form.Input fluid label="Title" placeholder="Title" name="Title" onChange={this.handleChangeTitle} value={this.state.searchInputTitle}/> */}
                    <Form.Input fluid label="Author" placeholder="Author" name="Author" onChange={this.handleChangeAuthor} value={this.state.searchInputAuthor}/>
                    {/* <Form.Input fluid label="Genre" placeholder="Genre" name="Genre" onChange={this.handleChangeGenre} value={this.state.searchInputGenre}/> */}
                </Form.Group>
                <Form.Button>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}

export default SearchForm