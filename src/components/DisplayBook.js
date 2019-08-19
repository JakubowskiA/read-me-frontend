import React from 'react'
import { Image } from 'semantic-ui-react'


const DisplayBook = (props) => {

  return (
    <div className="display-book">
      <h2> {props.book.title} </h2>
      <h3> By: {props.book.author} </h3>
      <Image src={props.book.image} centered />
      <h3> {props.book.description} </h3>
      {props.displayedBookInCollection ?
        (<button
          type="button"
          onClick={_ => props.deleteFromMyBooks(props.book)}>
          Remove From Your Books
      </button>) :
        (<button

          type="button"
          onClick={_ => props.addToMyBooks(props.book)}>
          Add to Your Books
      </button>)}

    </div>
  )
}
export default DisplayBook

//route: user_books/detail/user_id/book_id
//resp will have keys for: title, author, image, description
