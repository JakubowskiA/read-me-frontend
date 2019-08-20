import React, { Component, Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';
import SearchForm from './SearchForm'
import SearchedBooks from './SearchedBooks';
import MyBooksSidebar from './MyBooksSidebar';
import MyBooksPage from './MyBooksPage';
import DisplayBook from './DisplayBook';


// TO DO
// CONDITIONAL RENDERING OF COMPONENTS

const BASE_URL = "http://localhost:3000"


class BooksContainer extends Component {
    state = {
        searchedBooks: [],
        myBooks: [],
        displayedBook: {},
        displayedBookInCollection: false,
    }
    submitSearch = (input) => {
        this.props.history.push('/books/search-books')
        fetch(`${BASE_URL}/users/${this.props.userId}/search/${input.searchInputAuthor}`)
            .then(res => res.json())
            .then(data => this.setState({ searchedBooks: data }))
        // SUBMIT SEARCH FORM
    }

    deleteFromMyBooks = (bookObj) => {
        this.props.history.push('/books/my-books')

        fetch(`${BASE_URL}/user_books/${this.props.userId}/${bookObj.id}`, {
            method: "DELETE", headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(
            _ => {
                const newMyBooks = this.state.myBooks.filter(book => book.id !== bookObj.id)
                this.setState({
                    myBooks: newMyBooks
                })
            }
        )
    }

    componentWillMount(){
        if (!this.props.userId){
            this.props.history.push('/')
        }
    }
    componentDidMount() {
        fetch(`${BASE_URL}/users/${this.props.userId}/my_books`)
            .then(res => res.json())
            .then(data => this.setState({ myBooks: data }))
    }

    addToMyBooks = (book) => {
        this.props.history.push('/books/my-books')

        fetch(`${BASE_URL}/user_books`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }, body: JSON.stringify({
                    user_id: this.props.userId,
                    book_id: book.id
                })
            })
            .then(resp => resp.json())
            .then(book => this.setState({ myBooks: [...this.state.myBooks, book] }))

        // ADD BOOK TO MY BOOKS
    }

    showBookDetails = (book, inCollection) => {
        // SHOW BOOK DETAILS
        // this.setState({displayedBook: book})
        // console.log(book)

        fetch(`${BASE_URL}/users/${this.props.userId}/book_detail/${book.id}`)
            .then(res => res.json())
            .then(book => {
                this.setState({ displayedBook: book, displayedBookInCollection: inCollection });
                this.props.history.push('/books/display-book')
            }
            )
    }



    render() {
        console.log('user id',this.props.userId);
        
        return (

            <Fragment className="container">
                <Route
                    path="/books/search-books"
                    render={() => (
                        <div className="component-row">
                            <SearchForm submitSearch={this.submitSearch} />
                            <SearchedBooks searchedBooks={this.state.searchedBooks} addToMyBooks={this.addToMyBooks} showBookDetails={this.showBookDetails}
                            />
                            <MyBooksSidebar myBooks={this.state.myBooks}
                                showBookDetails={this.showBookDetails} />
                        </div>
                    )}
                />
                <Route
                    path="/books/display-book"
                    render={() => (
                        <div className="component-row">
                            <SearchForm submitSearch={this.submitSearch} />
                            <DisplayBook
                                displayedBookInCollection={this.state.displayedBookInCollection}
                                addToMyBooks={this.addToMyBooks}
                                deleteFromMyBooks={this.deleteFromMyBooks}
                                book={this.state.displayedBook}
                            />
                            <MyBooksSidebar myBooks={this.state.myBooks}
                                showBookDetails={this.showBookDetails}
                            />
                        </div>
                    )}

                />

                <Route
                    path="/books/my-books"
                    render={() => (

                        <MyBooksPage myBooks={this.state.myBooks}
                            addOrDelete={this.deleteFromMyBooks}
                            showBookDetails={this.showBookDetails} />
                    )}

                />

            </Fragment>
        )
    }
}

export default withRouter(BooksContainer)
