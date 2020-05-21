import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  StyledCollapse,
  StyledCollapseButton,
  StyledCollapseButtonIcon,
  StyledCollapseContent,
} from './styles'
import ArrowDownIcon from '../Icons/ArrowDownIcon'

const Collapse = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const handleClick = (e) => {
    e.preventDefault()
    setIsCollapsed(!isCollapsed)
  }

  return (
    <StyledCollapse isCollapsed={isCollapsed}>
      <StyledCollapseButton aria-label="Open accordion" onClick={handleClick}>
        {title}
        <StyledCollapseButtonIcon>
          <ArrowDownIcon />
        </StyledCollapseButtonIcon>
      </StyledCollapseButton>
      <StyledCollapseContent>{children}</StyledCollapseContent>
    </StyledCollapse>
  )
}

export default Collapse

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
