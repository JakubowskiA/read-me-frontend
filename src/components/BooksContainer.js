import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import SearchForm from './SearchForm'
import SearchedBooks from './SearchedBooks';
import MyBooksSidebar from './MyBooksSidebar';
import MyBooksPage from './MyBooksPage';
import DisplayBook from './DisplayBook';

// TO DO
// CONDITIONAL RENDERING OF COMPONENTS

const BASE_URL = "http://localhost:3000"
const TEST_USER_ID = 1;

class BooksContainer extends Component{
    state={
        searchedBooks:[],
        myBooks:[],
        displayedBook: {},
    }
    submitSearch=(input)=>{
        fetch(`${BASE_URL}/users/${TEST_USER_ID}/search/${input.searchInputAuthor}`)
        .then(res=>res.json())
        .then(data=>this.setState({searchedBooks: data}))
        // SUBMIT SEARCH FORM
    }

    componentDidMount(){
        fetch(`${BASE_URL}/users/${TEST_USER_ID}/my_books`)
        .then(res=>res.json())
        .then(data=>this.setState({myBooks: data}))
    }

    addToMyBooks=(book)=>{
        // console.log(book)
        fetch(`${BASE_URL}/user_books`,
        {method: "POST",
        headers: {
           "Content-Type": "application/json",
           "Accept": "application/json"
       }, body: JSON.stringify({
           user_id: 1,
           book_id: book.id
        })})
        .then(resp => resp.json())
        .then(book=>this.setState({myBooks:[...this.state.myBooks, book]}))

        // ADD BOOK TO MY BOOKS
    }

    showBookDetails=(book)=>{
        // SHOW BOOK DETAILS
        // this.setState({displayedBook: book})
        // console.log(book)
        fetch(`${BASE_URL}/users/1/book_detail/${book.id}`)
        .then(res => res.json())
        .then(book => this.setState({displayedBook: book}))


    }

    render(){
        return(
            <div>
                <SearchForm submitSearch={this.submitSearch} />
                <div className="component-row">
                <Route
                path="/"
                render={() => (
                    <SearchedBooks searchedBooks={this.state.searchedBooks} addToMyBooks={this.addToMyBooks} showBookDetails={this.showBookDetails}
                    />
                )}
                />
                <Route
                path="/"
                render={() => (
                    <DisplayBook
                        book={this.state.displayedBook}
                    />
                )}

                />
                {/* <MyBooksPage  myBooks={this.state.myBooks} myBooks={this.state.myBooks} showBookDetails={this.showBookDetails}/> */}
                <MyBooksSidebar  myBooks={this.state.myBooks}/>
                </div>
            </div>
        )
    }
}

export default BooksContainer
