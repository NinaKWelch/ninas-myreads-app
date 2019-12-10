import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '../styles/Card'
import CardActions from '../styles/CardActions'
import CardImage from '../styles/CardImage'
import CardContent from '../styles/CardContent'
import Typography from '../styles/Typography'
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

    return (
      <Card as="li">
        <CardActions>
          <CardImage
            bgImage={book.imageLinks ?
            `url(${book.imageLinks.thumbnail})`
              : ""
            }
          />

          <SelectShelf shelf={shelf} handleChange={this.changeShelf} />
        </CardActions>

        <CardContent>
          <Typography
            size="0.95em"
            height="1.15em"
            weight="500"
            as="h5"
          >
            {book.title}
          </Typography>

          {book.authors 
            ? book.authors.map(author =>
              <Typography
                key={author}
                size="0.9em"
                weight="300"
                as="h6"
              >
                {author}
              </Typography>) 
            : ""
          }
        </CardContent>
      </Card>
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
