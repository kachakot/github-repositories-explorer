import { ADD_USERS } from './actionTypes'

const addUsers = (users) => ({
  type: ADD_USERS,
  payload: users,
})

export default addUsers
