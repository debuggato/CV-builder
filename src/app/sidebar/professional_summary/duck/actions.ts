import * as type from './types'

export const setJobDescription = (value: string) => ({
  type: type.SET_JOB_DESCRIPTION,
  payload: value
})