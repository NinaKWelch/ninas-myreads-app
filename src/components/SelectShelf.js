import React from 'react'
import PropTypes from 'prop-types'

const SelectShelf = ({ shelf, handleChange }) => {
  return (
    <div className="book-shelf-changer">
      <label htmlFor="bookshelves" className="visually-hidden">Choose a shelf:</label>
      <select value={shelf} onChange={handleChange} id="bookshelves" name="select">
        <optgroup label="Select shelf...">
          <option value="currentlyReading">Currently Reading</option>
          
          <option value="wantToRead">Want to Read</option>

          <option value="read">Read</option>

          <option value="none">None</option>
        </optgroup>
      </select>
    </div>
  )
}

SelectShelf.propTypes = {
  shelf: PropTypes.string,  
  handleChange: PropTypes.func.isRequired
}

SelectShelf.defaultProps = {
  shelf: "none"
};

export default SelectShelf 
