import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import OnShelf from './OnShelf'

const SearchBooks = ({ books, updateBookShelf }) => {
    const shelves = [
      {title: 'Currently Reading', name: 'currentlyReading'},
      {title: 'Want to Read', name: 'wantToRead'},
      {title: 'Read', name: 'read'}
    ]

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        
        <div className="list-books-content">
          <div>
            {shelves.map(shelf => (
              <OnShelf
                key={shelf.name}
                bookShelf={shelf}
                books={books}
                updateBookShelf={updateBookShelf}
              />
            ))}
          </div>
        </div>
        
        <div className="open-search">
          <Link to="search">
            Add a book
          </Link>
        </div>
      </div>
    )
}

SearchBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired, 
  updateBookShelf: PropTypes.func.isRequired
}

export default SearchBooks