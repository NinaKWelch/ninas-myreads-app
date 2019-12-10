import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Container from '../styles/Container'
import Typography from '../styles/Typography'
import { ActionButton } from '../styles/IconButton'
import Header from './Header'
import OnShelf from './OnShelf'


const SearchBooks = ({ books, updateBookShelf }) => {
    const shelves = [
      {title: 'Currently Reading', name: 'currentlyReading'},
      {title: 'Want to Read', name: 'wantToRead'},
      {title: 'Read', name: 'read'}
    ]

    return (
      <>
        <Header bgcolor="primary" raised={1}>
          <Typography
            color="white"
            size="2em"
            as="h1"
            brand
          >
            MyReads
          </Typography>
        </Header>
        
        <Container>
          {shelves.map(shelf => (
            <OnShelf
              key={shelf.name}
              bookShelf={shelf}
              books={books}
              updateBookShelf={updateBookShelf}
            />
          ))}
        </Container>
        
        <ActionButton
          size="52px"
          bgcolor="secondary"
          raised={1}
          as={Link}
          to="search"
          aria-label="Add a book"
        />
      </>
    )
}

SearchBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired, 
  updateBookShelf: PropTypes.func.isRequired
}

export default SearchBooks