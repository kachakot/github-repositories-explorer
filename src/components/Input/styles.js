import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
`

export { StyledInput }
