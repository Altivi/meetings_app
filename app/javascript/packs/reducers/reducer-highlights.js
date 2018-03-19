import * as ACTION_TYPES from '../constants/actionTypes'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.HIGHLIGHT_CREATED:
      return [...state, action.highlight]
    default:
      return state
  }
}
