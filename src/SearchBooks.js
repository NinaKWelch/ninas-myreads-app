import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBooks extends React.Component {
  state = {
    query: '',
    bookSearch: []
  }

  //update search to match the input
  updateQuery = (query) => {
    this.setState({
      query: query
    })

    //show matching books form API
    //if search field has input
    if (query) {
      BooksAPI.search(query).then((books) => {
        if (books.length) {
          this.setState({
            bookSearch: books
          })
        } else {
          this.setState({
            bookSearch: []
          })
        }
      })
    }
  }

  render() {
    const { query, bookSearch } = this.state
    const { updateBookShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {bookSearch.map(book => (<Book key={book.id} book={book} updateBookShelf={updateBookShelf}/>))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
