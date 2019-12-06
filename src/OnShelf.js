import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import reader from './icons/book-reader.svg'

const OnShelf = ({ bookShelf, books, updateBookShelf }) => {
  const arrangeBooks = shelf => {
    const booksOnShelf = books.filter(book => book.shelf === shelf.name)

    if (booksOnShelf.length === 0) {
      return <li><img src={reader} alt="no books on shelf" width="128" height="193" /></li>
    }
    
    return booksOnShelf.map(book => (
      <Book 
        key={book.id} 
        book={book} 
        updateBookShelf={updateBookShelf}
      />
    ))
  }

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {bookShelf.title}
      </h2>

      <div className="bookshelf-books">
        <ol className="books-grid">
          {arrangeBooks(bookShelf)}
        </ol>
      </div>
    </div>
  )
}

OnShelf.propTypes = {
  bookShelf: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired, 
  updateBookShelf: PropTypes.func.isRequired
}

export default OnShelf