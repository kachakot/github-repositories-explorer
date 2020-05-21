import styled, { css } from 'styled-components'

export const transition = ({
  property = 'all',
  duration = '270ms',
  timingFunction = 'ease-in-out',
}) => css`
  transition: ${property} ${duration} ${timingFunction};
`

export const IconWrapper = styled.span`
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;

  svg {
    width: ${({ width }) => `${width || 1}em`};
    height: 1em;
    font-size: 1rem;
    fill: currentColor;
  }
`
