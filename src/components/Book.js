import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';

class Book extends Component {
    render() {
        console.log(this.props);

        return (
            <Card className="book-card">
                <br />
                <Image src={this.props.book.image} centered />
                <br />
                <h2>{this.props.book.title}</h2>
                <h3>By: {this.props.book.author}</h3>
                <button className="card-button1" onClick={() => this.props.addOrDelete(this.props.book)}>{this.props.inCollection ? "Remove from my collection" : "Add to my collection"}</button>
                <button className="card-button2" onClick={() => this.props.showBookDetails(this.props.book, this.props.inCollection)}>See Details</button>
            </Card>
        )
    }
}

export default Book
