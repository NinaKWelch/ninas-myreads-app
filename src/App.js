import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends Component {
  constructor(props) {
    super(props)
    this.state = { books: [] }
  }

  // fetch books from the API
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  // add the book to the right shelf
  updateBookShelf = (book, shelf) => {
    const currentBook = { ...book, shelf }
    BooksAPI.update(book, shelf).then(() => {
      this.setState(state => ({
        books: state.books.map(b => b.id !== currentBook.id ? b : currentBook)
      }))
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Switch>
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
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}

export default BooksApp