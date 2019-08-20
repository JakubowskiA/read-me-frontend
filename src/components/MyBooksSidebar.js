import React, { Component } from 'react';
import Book from './Book'

class MyBooksSidebar extends Component {


    render() {
        console.log(this.props.myBooks);

        const myBooks = this.props.myBooks //GRAB MY BOOKS INFO
        let response
        if (myBooks.length === 0) {
            response = "You have no books."
        } else {
            response = myBooks.map(book => (
                <ul>
                    <li>
                        <a onClick={() => this.props.showBookDetails(book, true)}>{book.title} </a>
                    </li>
                </ul>
            ))
        }

        return (
            <div className="my-books-sidebar">
                <h2>My Books</h2>
                {response}
            </div>
        )
    }
}

export default MyBooksSidebar

//displayedBookInCollection:
