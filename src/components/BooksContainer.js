import React, {Component} from 'react';
import SearchForm from './SearchForm'
import SearchedBooks from './SearchedBooks';
import MyBooks from './MyBooks'
const BASE_URL = "http://localhost:3000"
class BooksContainer extends Component{
    state={
        searchedBooks:[],
        myBooks:[]
    }

    submitSearch=(input)=>{
        fetch(`${BASE_URL}/users/1/search/${input.searchInputAuthor}`)
        .then(res=>res.json())
        .then(data=>this.setState({searchedBooks: data}))
        // SUBMIT SEARCH FORM
    }

    getMyBooks(){
        fetch(`${BASE_URL}/users/1/search/my_books`)
        .then(res=>res.json())
        .then(data=>this.setState({myBooks: data}))
    
    }

    render(){
        return(
            <div>
                <SearchForm submitSearch={this.submitSearch} />
                <div className="component-row">
                <SearchedBooks searchedBooks={this.state.searchedBooks}/>
                <MyBooks  myBooks={this.state. myBooks}/>
                </div>
            </div>
        )
    }
}

export default BooksContainer