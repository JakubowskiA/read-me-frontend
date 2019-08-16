import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import Book from './Book'

class SearchedBooks extends Component{


    render(){
        console.log('books',this.props.searchedBooks);
        const retrievedBooks = this.props.searchedBooks.map(book=>(
            <Book
            key={book.id}
            book={book}
            addToMyBooks={this.props.addToMyBooks}
            showBookDetails={this.props.showBookDetails}
            />
        ))
        return(
            <Card.Group itemsPerRow={5} className="searched-books-container">
                {retrievedBooks}
            </Card.Group>
        )
    }
}

export default SearchedBooks
