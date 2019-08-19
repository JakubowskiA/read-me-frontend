import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Book from './Book'

class SearchedBooks extends Component {


    render() {
        console.log('books', this.props.searchedBooks);
        const retrievedBooks = this.props.searchedBooks.map(book => (
            <Book
                key={book.id}
                book={book}
                addOrDelete={this.props.addToMyBooks}
                showBookDetails={this.props.showBookDetails}
                inCollection={false}
            />
        ))
        return (
            <Card.Group itemsPerRow={3} className="searched-books-container">
                {retrievedBooks}
            </Card.Group>
        )
    }
}

export default SearchedBooks
