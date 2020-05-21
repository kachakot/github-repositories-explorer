import styled, { css } from 'styled-components'

import { transition } from '../../common/mixins'

const StyledButton = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  cursor: pointer;
  ${transition}

  &:hover {
    background: ${({ theme }) => theme.colors.blue2};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.75;
      pointer-events: none;
    `}
`

export { StyledButton }
