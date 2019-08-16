import React, {Component} from 'react';
import Book from './Book'

class MyBooks extends Component{
    
    
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
            <div className="my-books-container">
               <h2>My Books</h2> 
               <br/>
               {response}
            </div>
        )
    }
}

export default MyBooks