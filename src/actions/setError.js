import { ERROR } from '../actions/actionTypes'

const setError = (error) => ({
  type: ERROR,
  payload: error,
})

export default setError
