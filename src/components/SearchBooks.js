import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import reader from '../icons/book-reader.svg'

class SearchBooks extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      query: '',
      bookSearch: []
     }
  }

  // update search to match the input
  updateQuery = query => {
    this.setState({ query })

    // show matching books
    if (query) {
      BooksAPI.search(query).then(books => 
        books.length > 0
        ? this.setState({ bookSearch: books })
        : this.setState({ bookSearch: [] })
      )
    }
  }

  render() {
    const { updateBookShelf } = this.props
    const { query, bookSearch } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="search by title or author..."
              value={query}
              onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        
        {bookSearch.length > 0 ?
          <div className="search-books-results">
            <ol className="books-grid">
              {bookSearch.map(book => (
                <Book
                  key={book.id}
                  book={book}
                  updateBookShelf={updateBookShelf}
                />
              ))}
            </ol>
          </div> :
          <div className="search-books-filler">
            <img src={reader} alt="" className="search-books-filler-icon" />
          </div>
        }
      </div>
    )
  }
}

SearchBooks.propTypes = {
  updateBookShelf: PropTypes.func.isRequired
}

export default SearchBooks
