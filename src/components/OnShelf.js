import React from 'react'
import PropTypes from 'prop-types'
import FlexContainer from '../styles/FlexContainer'
import Card from '../styles/Card'
import Box from '../styles/Box'
import Typography from '../styles/Typography'
import Book from './Book'
import reader from '../icons/book-reader.svg'

const OnShelf = ({ bookShelf, books, updateBookShelf }) => {
  const arrangeBooks = shelf => {
    const booksOnShelf = books.filter(book => book.shelf === shelf.name)

    if (booksOnShelf.length === 0) {
      return (
        <Card as="li">
          <img src={reader} alt="No books on shelf" width="128" height="250" />
        </Card>
      )
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
    <FlexContainer as="section">
      <Box align="center" my="1em" divider>
        <Typography
            color="primary"
            weight="500"
            as="h2"
            gutterBottom
          >
            {bookShelf.title}
        </Typography>
      </Box>
      
      <FlexContainer as="ul">
        {arrangeBooks(bookShelf)}
      </FlexContainer>
    </FlexContainer>
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