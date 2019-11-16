import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class SearchBooks extends React.Component {
  render() {
    const { books, updateBookShelf } = this.props

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
            {shelves.map(thisShelf => (
              <BookShelf
                key={thisShelf.name}
                thisShelf={thisShelf}
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
}

export default SearchBooks