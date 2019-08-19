import React, { Component } from 'react';
import Book from './Book';
import { Card } from 'semantic-ui-react';

class MyBooksPage extends Component {


    render() {
        console.log(this.props)
        const myBooks = this.props.myBooks //GRAB MY BOOKS INFO
        let response
        if (myBooks.length === 0) {
            response = "You have no books."
        } else {
            response = myBooks.map(book => (
                <Book
                    key={book.id}
                    book={book}
                    addOrDelete={this.props.addOrDelete}
                    showBookDetails={this.props.showBookDetails}
                    inCollection={true}

                />
            ))
        }

        return (
            <div className="test">
                <h2>My Books Page</h2>
                <br />
                <Card.Group itemsPerRow={4} className="my-books-container">
                    {response}
                </Card.Group>

            </div>
        )
    }
}

export default MyBooksPage