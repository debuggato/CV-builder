import * as constants from './constants'

export const changeVat = (value: number) => ({
  type: constants.CHANGE_VAT,
  payload: value
})

export const changeDiscount = (value: number) => ({
  type: constants.CHANGE_DISCOUNT,
  payload: value
})

export const totalAmount = (value: string) => ({
  type: constants.TOTAL_AMOUNT,
  payload: value
})

export const amountWithoutTaxes = (value: string) => ({
  type: constants.AMOUNT_WITHOUT_TAXES,
  payload: value
})