import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  //fetch books from the API
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  //udate shelf to current shelf in the API
  //set the state of the book to current shelf
  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(b => 
          b.id !== book.id).concat([book])
      }))
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchBooks 
            books={books} 
            updateBookShelf={this.updateBookShelf}
          />
        )}/>
       
        <Route exact path="/" render={() => (
          <ListBooks 
            books={books} 
            updateBookShelf={this.updateBookShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp