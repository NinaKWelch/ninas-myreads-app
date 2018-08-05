import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import './App.css'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from './Book'

class BooksApp extends React.Component {
  state = {
    books: [],
    query: ''
  }

  //lifecycle event for API requests
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  //upadate the search
  updateQuery = (query) => {
    this.setState({
      query: query.trim()
    })
  }

  //move book to another shelf
  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((data) => {
      book.shelf = shelf
      this.setState(state => ({
        //books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
  }

  render() {
    const { books, query } = this.state

    //variable for search results
    let bookSearchResults

    //show search results by book title or authors
    if (query) {
        const match = new RegExp(escapeRegExp(query), 'i')
        bookSearchResults = books.filter((book) => match.test(book.title, book.authors))
    } else {
        bookSearchResults = books
    }

    //sort search results by book title
    bookSearchResults.sort(sortBy('title'))

    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {}
                <input type="text"
                  placeholder="Search by title or author"
                  value={query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {bookSearchResults.map(book => (<Book key={book.id} book={book} updateBookShelf={this.updateBookShelf}/> ))}
             </ol>
            </div>
          </div>
        )}/>
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.filter(book => book.shelf === 'currentlyReading').map(book => (<Book key={book.id} book={book} updateBookShelf={this.updateBookShelf}/>))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                       {books.filter(book => book.shelf === 'wantToRead').map(book => (<Book key={book.id} book={book} updateBookShelf={this.updateBookShelf}/>))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                       {books.filter(book => book.shelf === 'read').map(book => (<Book key={book.id} book={book} updateBookShelf={this.updateBookShelf}/>))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="search">Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
