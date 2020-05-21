import { take } from 'lodash/'

import setError from './setError'
import addUsers from './addUsers'

const API = 'https://api.github.com/'

const fetchUsers = (userName) => async (dispatch) => {
  const urlUsers = `${API}search/users?q=in:login+${userName}`
  try {
    // fetch users
    const response = await fetch(urlUsers)

    const data = await response.json()

    const users = take(data.items, 5)

    // fetch repositories related to users
    const repositoriesResponses = await Promise.all(
      users.map(({ repos_url }) => fetch(repos_url)),
    )
    const repositoriesData = await Promise.all(
      repositoriesResponses.map((response) => response.json()),
    )
    repositoriesData.forEach((data, id) => {
      users[id].repositories = data
    })

    dispatch(addUsers(users))
    if (!users.length) {
      dispatch(setError({ fetchUsersError: 'No result' }))
    }
  } catch (error) {
    dispatch(
      setError({
        fetchUsersError: 'Something went wrong. Probably too many API calls.',
      }),
    )
  }
}

export default fetchUsers
