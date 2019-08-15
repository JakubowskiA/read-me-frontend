import React, {Component} from 'react';
import SearchForm from './SearchForm'
import SearchedBooks from './SearchedBooks';
import MyBooks from './MyBooks'

class BooksContainer extends Component{
    state={
        allBooks:[]
    }

    componentDidMount(){
        fetch(`http://localhost:3000/users/1/search/${this.state.searchInputAuthor}`)
        .then(res=>res.json())
        .then(console.log)
    }

    submitSearch=()=>{
        // SUBMIT SEARCH FORM
      }

    render(){
        return(
            <div>
                <SearchForm submitSearch={this.submitSearch} />
                <SearchedBooks />
            </div>
        )
    }
}

export default BooksContainer