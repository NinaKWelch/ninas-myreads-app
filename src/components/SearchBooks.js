import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import FlexContainer from '../styles/FlexContainer'
import FlexItem from '../styles/FlexItem'
import Box from '../styles/Box'
import Typography from '../styles/Typography'
import { BackButton } from '../styles/IconButton'
import { SearchBar } from '../styles/Bar'
import Header from './Header'
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
      <>
        <Header justify="flex-start" raised={1}>
          <FlexItem cols={2}>
            <FlexContainer justify="flex-start">
              <BackButton
                bgcolor="default"
                as={Link}
                to="/"
                aria-label="Close"
              />
            </FlexContainer>
          </FlexItem>

          <FlexItem cols={8}>
            <SearchBar
              type="text"
              placeholder="Search by title or author..."
              value={query}
              onChange={e => this.updateQuery(e.target.value)}
              aria-label="Search"
              border
            />
          </FlexItem>
        </Header>

        {bookSearch.length > 0 ? (
          <FlexContainer>
            {bookSearch.map(book => (
              <Book
                key={book.id}
                book={book}
                updateBookShelf={updateBookShelf}
              />
            ))}
          </FlexContainer>
        ) : (
          <FlexContainer>
            <Box my="5em" align="center">
              <Typography size="2.5em" color="primary" weight="500" as="h3">
                Find books to read!
              </Typography>
            </Box>
            <FlexItem cols={3}>
              <img src={reader} alt="" />
            </FlexItem>
          </FlexContainer>
        )}
      </>
    )
  }
}

SearchBooks.propTypes = {
  updateBookShelf: PropTypes.func.isRequired
}

export default SearchBooks
