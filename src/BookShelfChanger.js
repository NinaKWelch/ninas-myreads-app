import React from 'react'

class BookShelfChanger extends React.Component {
  state = {
    shelf: 'none'
  }

  //set the state of the shelf to the current shelf
  changeShelf = (event) => {
      //set the state to selected option
      this.setState({ shelf: event.target.value })
  }

	render() {
    const { shelf } = this.state

		return (
      <div className="book-shelf-changer">
        <select value={shelf} onChange={this.changeShelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
		)
	}
}

export default BookShelfChanger