import React, {Component} from 'react';
import SearchForm from './SearchForm'
import SearchedBooks from './SearchedBooks';
import MyBooks from './MyBooks'
const BASE_URL = "http://localhost:3000"
class BooksContainer extends Component{
    state={
        searchedBooks:[]

    }

    submitSearch=(input)=>{
        fetch(`${BASE_URL}/users/1/search/${input.searchInputAuthor}`)
        .then(res=>res.json())
        .then(data=>this.setState({searchedBooks: data}))
        // SUBMIT SEARCH FORM
    }

    render(){
        return(
            <div>
                <SearchForm submitSearch={this.submitSearch} />
                <SearchedBooks searchedBooks={this.state.searchedBooks}/>
            </div>
        )
    }
}

export default BooksContainer
