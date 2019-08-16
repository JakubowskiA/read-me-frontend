import React from 'react'

const DisplayBooks = (props) => {



  return(
    <div>
      <h2>{this.props.book.title}</h2>
      <h3>By: {this.props.book.author}</h3>
      <Image src={this.props.book.image} centered/>
      <h3>By: {this.props.book.description}</h3>
      <button
        type="button"
        name="add book">Add to Your Books
      </button>
    </div>
  )
}
export default DisplayBooks

//route: user_books/detail/user_id/book_id
//resp will have keys for: title, author, image, description
