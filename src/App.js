import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'

class BooksApp extends Component {
  constructor(props) {
    super(props)
    this.state = { books: [] }
  }

  // fetch books from the API
  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ books })
      })
  }

  // add the book to the right shelf
  updateBookShelf = (book, shelf) => {
    const currentBook = { ...book, shelf }
    BooksAPI.update(book, shelf)
      .then(() => {
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat(currentBook)
        }))
      })
  }

  render() {
    const { books } = this.state

    return (
      <div>
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