import { combineReducers } from 'redux'

import users from './users'
import errors from './errors'

const reducers = combineReducers({
  users,
  errors,
})

export default reducers
