import React from 'react'

class Book extends React.Component {


  	render() {
  		const style = {
			width: 128,
			height: 193,
			backgroundImage: ''
  		}

  		const book = '';

    	return (
			<li>
	        	<div className="book">
	          		<div className="book-top">
	            		<div className="book-cover" style={style}></div>
            			<div className="book-shelf-changer">
              			<select>
                			<option value="move" disabled>Move to...</option>
                			<option value="currentlyReading">Currently Reading</option>
                			<option value="wantToRead">Want to Read</option>
                			<option value="read">Read</option>
                			<option value="none">None</option>
              			</select>
	            		</div>
	          		</div>
	          		<div className="book-title">{this.props.book.name}</div>
	          		<div className="book-authors">{this.props.book.author}</div>
	        	</div>
	     	</li>
    	)
  	}
}

export default Book