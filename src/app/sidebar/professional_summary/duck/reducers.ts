import * as type from './types'
import initialState from './state'

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case type.SET_JOB_DESCRIPTION:
      state = {
        ...state,
        jobDescription: action.payload
      }
    break;
    default:
      break;
  }
  return state
}

export default reducer