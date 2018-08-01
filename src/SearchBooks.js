import React from 'react'
import { Link } from 'react-router-dom'

class SearchBooks extends React.Component {
	/*state = {
		books: [],
		searchTerm: '',
		searchResults: []
    }

    handleChange(event) {
    	this.setState({searchTerm:event.target.value});
    }

    getResults() {
        calltodb(searchTerm).then(event => {
            this.setState({searchResults: event.value})
        });
    }*/

	render() {
		/*const {searchTerm} = this.state*/
	    return (

		    <div className="search-books">
		        <div className="search-books-bar">
		            <Link className="close-search" to="/">Close</Link>
		            <div className="search-books-input-wrapper">
		               { }
		               <input type="text"
		                   placeholder="Search by title or author" />
		            </div>
		        </div>
		        <div className="search-books-results">
		            <ol className="books-grid"></ol>
		        </div>
		    </div>

	    )
	}
}

export default SearchBooks