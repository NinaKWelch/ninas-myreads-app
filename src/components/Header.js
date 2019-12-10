import React from 'react'
import PropTypes from 'prop-types'
import TopBar from '../styles/TopBar'

const Header = ({ justify, bgcolor, raised, children }) => (
  <TopBar
    justify={justify}
    bgcolor={bgcolor}
    raised={raised}
  >
    {children}
  </TopBar>
)

Header.propTypes = {
  justify: PropTypes.string,
  bgcolor: PropTypes.string,
  raised: PropTypes.number,
  children: PropTypes.node.isRequired
}

Header.defaultProps = {
  bgcolor: "default",
  raised: 0,
  justify: "center"
}

export default Header
