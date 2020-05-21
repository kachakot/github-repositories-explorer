import styled from 'styled-components'
import { transition } from '../../common/mixins'

const StyledRepositories = styled.ul``

const StyledRepositoriesItem = styled.li`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.grey2};
  padding: 0.75rem;
  margin-left: 2rem;

  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`

const StyledRepositoriesDescription = styled.p`
  word-break: break-all;
`

const StyledRepositoriesHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-right: 2.5rem;

  & + ${StyledRepositoriesDescription} {
    margin-top: 0.5rem;
  }
`

const StyledRepositoriesTitle = styled.a`
  display: block;
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  word-break: break-all;
  ${transition}

  &:hover {
    opacity: 0.5;
  }
`

const StyledRepositoriesReviews = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`

const StyledRepositoriesReviewsIcon = styled.span`
  display: flex;
  margin-left: 0.25rem;

  svg {
    font-size: 0.875rem;
  }
`

export {
  StyledRepositories,
  StyledRepositoriesItem,
  StyledRepositoriesHeader,
  StyledRepositoriesTitle,
  StyledRepositoriesReviews,
  StyledRepositoriesReviewsIcon,
  StyledRepositoriesDescription,
}
