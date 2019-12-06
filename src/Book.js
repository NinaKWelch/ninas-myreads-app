import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  constructor(props) {
    super(props)
    this.state = { shelf: 'none' }
  }

  // set the book on the assigned shelf, if selected
  componentDidMount() {
    this.setState({
      // eslint-disable-next-line react/destructuring-assignment
      shelf: this.props.book.shelf
    })
  }

  // set the book on a selected shelf
  changeShelf = event => {
    this.setState({
      shelf: event.target.value
    })

    // add the book to the right shelf
    // eslint-disable-next-line react/destructuring-assignment
    this.props.updateBookShelf(this.props.book, event.target.value)
  }

  render() {
    const { book } = this.props
    const { shelf } = this.state

    const imgStyle = {
      width: 128,
      height: 193,
      backgroundImage: book.imageLinks
        ? `url(${book.imageLinks.thumbnail})`
        : ''
    }

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={imgStyle} />

            <div className="book-shelf-changer">
              <select value={shelf} onChange={this.changeShelf}>
                <option value="move" label="Move to..." disabled />

                <option value="currentlyReading" label="Currently Reading" />

                <option value="wantToRead" label="Want to Read" />

                <option value="read" label="Read" />

                <option value="none" label="None" />
              </select>
            </div>
          </div>

          <div className="book-title">{book.title}</div>

          <div className="book-authors">
            {book.authors ? book.authors.toString() : ''}
          </div>
        </div>
      </li>
    )
  }
}

Book.propTypes = {
  book: PropTypes.shape({
    shelf: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string
    })
  }).isRequired,
  updateBookShelf: PropTypes.func.isRequired
}

export default Book
