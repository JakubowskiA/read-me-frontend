import React, {Component} from 'react';
import SearchForm from './SearchForm'
import SearchedBooks from './SearchedBooks';
import MyBooksSidebar from './MyBooksSidebar'
const BASE_URL = "http://localhost:3000"
const TEST_USER_ID = 1;
class BooksContainer extends Component{
    state={
        searchedBooks:[],
        myBooks:[]
    }
    submitSearch=(input)=>{
        fetch(`${BASE_URL}/users/${TEST_USER_ID}/search/${input.searchInputAuthor}`)
        .then(res=>res.json())
        .then(data=>this.setState({searchedBooks: data}))
        // SUBMIT SEARCH FORM
    }

    getMyBooks(){
        fetch(`${BASE_URL}/users/${TEST_USER_ID}/my_books`)
        .then(res=>res.json())
        .then(data=>this.setState({myBooks: data}))
    }

    addToMyBooks=()=>{
        // ADD BOOK TO MY BOOKS
    }

    render(){
        return(
            <div>
                <SearchForm submitSearch={this.submitSearch} />
                <div className="component-row">
                <SearchedBooks searchedBooks={this.state.searchedBooks} addToMyBooks={this.addToMyBooks}/>
                <MyBooksSidebar  myBooks={this.state.myBooks}/>
                </div>
            </div>
        )
    }
}

export default BooksContainer