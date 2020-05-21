import styled, { css } from 'styled-components'

import { transition } from '../../common/mixins'

const StyledCollapseButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1.75rem 0.75rem 0.75rem;
  background: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`

const StyledCollapseButtonIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  ${transition}
`

const StyledCollapseContent = styled.div`
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  ${transition({ duration: '350ms' })}
`

const StyledCollapse = styled.div`
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  ${({ isCollapsed }) =>
    !isCollapsed &&
    css`
      ${StyledCollapseButtonIcon} {
        transform: translateY(-50%) rotate(180deg);
      }
      ${StyledCollapseContent} {
        max-height: 100rem;
        opacity: 1;
        margin-top: 0.75rem;
        overflow-y: auto;
      }
    `}
`

export {
  StyledCollapse,
  StyledCollapseButton,
  StyledCollapseButtonIcon,
  StyledCollapseContent,
}
