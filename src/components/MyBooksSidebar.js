import React, {Component} from 'react';
import Book from './Book'

class MyBooksSidebar extends Component{
    
    
    render(){
        const myBooks=this.props.myBooks //GRAB MY BOOKS INFO
        let response
        if (myBooks.length === 0){
            response = "You have no books."
        }else{
            response = myBooks.map(book=>(
                <li>{book.title}</li>
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

export default MyBooksSidebar