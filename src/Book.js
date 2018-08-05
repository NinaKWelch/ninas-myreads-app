import React from 'react'
//import BookShelfChanger from './BookShelfChanger'

class Book extends React.Component {
  state = {
    shelf: 'none'
  }

  componentDidMount() {
    this.setState({
      shelf: this.props.book.shelf
    })
  }

  //set the state of the shelf to the current shelf
  changeShelf = (event) => {
      //set the state to selected shelf
      this.setState({
        shelf: event.target.value
      })

      //pass the new state as an argument to updateBookShelf function
      this.props.updateBookShelf(this.props.book, event.target.value)
  }

	render() {
		const { book } = this.props
    const { shelf } = this.state

    //style for the book image
    const style = {
      width: 128,
      height: 193,
      backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})` : ``
    }

		return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={style}></div>
            <div className="book-shelf-changer">
              <select value={shelf} onChange={this.changeShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors ? book.authors.toString() : ''}</div>
        </div>
      </li>
		)
	}
}

export default Book