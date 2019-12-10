import React from 'react'
import PropTypes from 'prop-types'
import { SelectButton } from '../styles/IconButton'

const SelectShelf = ({ shelf, handleChange }) => {
  const menuStyle = {
    width: '100%',
    height: '100%',
    opacity: 0,
    cursor: 'pointer'
  }

  const labelStyle = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: 1
  }

  return (
    <SelectButton
      bgcolor="primary"
      raised={1}
      aria-label="Choose a shelf"
    >
      <label htmlFor="bookshelves" style={labelStyle}>
        Choose a shelf:
      </label>

      <select
        value={shelf}
        onChange={handleChange}
        id="bookshelves"
        name="select"
        style={menuStyle}
      >
        <optgroup label="Choose a shelf...">
          <option value="currentlyReading">Currently Reading</option>
          
          <option value="wantToRead">Want to Read</option>

          <option value="read">Read</option>

          <option value="none">None</option>
        </optgroup>
      </select>
    </SelectButton>
  )
}

SelectShelf.propTypes = {
  shelf: PropTypes.string,  
  handleChange: PropTypes.func.isRequired,
}

SelectShelf.defaultProps = {
  shelf: "none"
};

export default SelectShelf 
