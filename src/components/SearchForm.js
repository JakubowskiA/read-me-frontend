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
                <Form onSubmit={() => this.props.submitSearch(this.state)}>
                <Form.Group widths="equal">
                    {/* <Form.Input placeholder="Enter a title" name="Title" onChange={this.handleChangeTitle} value={this.state.searchInputTitle}/> */}
                    <Form.Input placeholder="Enter an author" name="Author" onChange={this.handleChangeAuthor} value={this.state.searchInputAuthor}/>
                    {/* <Form.Input placeholder="Enter a genre" name="Genre" onChange={this.handleChangeGenre} value={this.state.searchInputGenre}/> */}
                </Form.Group>
                <Form.Button>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}

export default SearchForm