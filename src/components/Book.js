import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import {Image} from 'semantic-ui-react';

class Book extends Component{
    render(){
        return(
            <Card>
                <h2>{this.props.book.title}</h2>
                <h3>By: {this.props.book.author}</h3>
                <Image src={this.props.book.image} centered/>
                

            </Card>
        )
    }
}

export default Book