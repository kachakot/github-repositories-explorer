import React from 'react'
import PropTypes from 'prop-types'
import _noop from 'lodash/noop'

import { StyledInput } from './styles'

const Input = ({ handleInputChange, inputValue, placeholder, name, type }) => (
  <StyledInput
    type={type}
    placeholder={placeholder}
    name={name}
    value={inputValue}
    onChange={handleInputChange}
  />
)

export default Input

Input.defaultProps = {
  type: 'text',
  onChange: _noop,
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}
