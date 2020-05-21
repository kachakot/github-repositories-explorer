import { ERROR } from '../actions/actionTypes'

const errors = (state = {}, action) => {
  switch (action.type) {
    case ERROR:
      return { ...state, ...action.payload }

    default:
      return state
  }
}

export default errors
