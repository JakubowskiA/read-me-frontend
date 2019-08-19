import React from 'react'
import { Image } from 'semantic-ui-react'


const DisplayBook = (props) => {

  return (
    <div>
      <h2> {props.book.title} </h2>
      <h3> By: {props.book.author} </h3>
      <Image src={props.book.image} centered />
      <h3> {props.book.description} </h3>
      <button
        type="button"
        name="add book">Add to Your Books
      </button>
    </div>
  )
}
export default DisplayBook

//route: user_books/detail/user_id/book_id
//resp will have keys for: title, author, image, description
