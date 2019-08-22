import * as constants from './constants'

export const changeJobTitle = (value: string) => ({
  type: constants.SET_JOB_TITLE,
  payload: value
})

export const changeFirstname = (value: string) => ({
  type: constants.SET_FIRST_NAME,
  payload: value
})

export const changeLastname = (value: string) => ({
  type: constants.SET_LAST_NAME,
  payload: value
})

export const changeCity = (value: string) => ({
  type: constants.SET_CITY,
  payload: value
})