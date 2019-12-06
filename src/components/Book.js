import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectShelf from './SelectShelf'

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

            <SelectShelf shelf={shelf} handleChange={this.changeShelf} />
          </div>

          <div className="book-title">{book.title}</div>

          <div className="book-authors">
            {book.authors ? book.authors.map(author => <span key={author}>{author}<br/></span>) : ''}
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
