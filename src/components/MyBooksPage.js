import React, {Component} from 'react';
import Book from './Book'

class MyBooksPage extends Component{
    
    
    render(){
        const myBooks=this.props.myBooks //GRAB MY BOOKS INFO
        let response
        if (myBooks.length === 0){
            response = "You have no books."
        }else{
            response = myBooks.map(book=>(
                <Book
                key={book.id}
                book={book}
                />
            ))
        }

        return(
            <div className="test">
               <h2>My Books Page</h2> 
               <br/>
               {response}
            </div>
        )
    }
}

export default MyBooksPage