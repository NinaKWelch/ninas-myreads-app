import React from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends React.Component {

	render() {
		const { book } = this.props

    //style for the book image
    const style = {
      width: 128,
      height: 193,
      backgroundImage: 'url(${book.imageLinks.thumbnail})'
    }

		return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={style}>
            </div>
            <BookShelfChanger onChangeShelf={(book) => book.shelf = this.props.shelf}/>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
		)
	}
}

export default Book