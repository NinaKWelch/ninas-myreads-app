import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class SearchBooks extends React.Component {
  state = {
    query: '',
    books: []
  }

  //lifecycle event for API requests
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  //update the query on change
  updateQuery = (query) => {
  	this.setState({ query: query.trim() })
  }

	render() {
		const { query, books } = this.state

		//variable for search results
		let bookSeachResults

		//match books by title or author
		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			bookSeachResults = books.filter((book) => match.test(book.title, book.authors))
		} else {
			bookSeachResults = books
		}

		//sort books by title
		bookSeachResults.sort(sortBy('title'))

	    return (
		    <div className="search-books">
		        <div className="search-books-bar">
		            <Link className="close-search" to="/">Close</Link>
		            <div className="search-books-input-wrapper">
		               <input
		               	    type="text"
		                    placeholder="Search by title or author"
							value={this.state.query}
							onChange={(event) => this.updateQuery(event.target.value)}
		                />
		            </div>
		        </div>
		        <div className="search-books-results">
		            <ol className="books-grid">
						{bookSeachResults.map(book =>
                    		<Book key={book.id} book={book}/>
                  		)}
		            </ol>
		        </div>
		    </div>
	    )
	}
}

export default SearchBooks