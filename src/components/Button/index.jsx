import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './styles'

const Button = ({ children, disabled }) => (
  <StyledButton type="submit" aria-label="Submit" disabled={disabled}>
    {children}
  </StyledButton>
)

export default Button

Button.defaultProps = {
  disabled: false,
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
}
