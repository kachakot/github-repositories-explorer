import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledRepositories,
  StyledRepositoriesItem,
  StyledRepositoriesHeader,
  StyledRepositoriesTitle,
  StyledRepositoriesReviews,
  StyledRepositoriesReviewsIcon,
  StyledRepositoriesDescription,
} from './styles'
import StarIcon from '../Icons/StarIcon'

const Repositories = ({ repositories }) => (
  <StyledRepositories>
    {repositories?.length ? (
      repositories.map(({ id, name, watchers, description, svn_url }) => (
        <StyledRepositoriesItem key={id}>
          <StyledRepositoriesHeader>
            <StyledRepositoriesTitle href={svn_url} target="_blank">
              {name}
              <StyledRepositoriesReviews>
                {watchers}
                <StyledRepositoriesReviewsIcon>
                  <StarIcon />
                </StyledRepositoriesReviewsIcon>
              </StyledRepositoriesReviews>
            </StyledRepositoriesTitle>
          </StyledRepositoriesHeader>
          {description && (
            <StyledRepositoriesDescription>
              {description}
            </StyledRepositoriesDescription>
          )}
        </StyledRepositoriesItem>
      ))
    ) : (
      <StyledRepositoriesItem>No repositories</StyledRepositoriesItem>
    )}
  </StyledRepositories>
)

export default Repositories

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      watches: PropTypes.number,
      description: PropTypes.string,
    }),
  ).isRequired,
}
