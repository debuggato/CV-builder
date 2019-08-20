import { createStore, applyMiddleware } from 'redux'

import {
  CHANGE_VAT,
  CHANGE_DISCOUNT,
  TOTAL_AMOUNT,
  AMOUNT_WITHOUT_TAXES
} from './constants'

const initialState = {
  vat: 0,
  discount: 0,
  isLogoUploaded: false,
  totalAmount: 0,
  amountWithoutTaxes: 0
}

// reducer
export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case CHANGE_VAT:
      state = {
        ...state,
        vat: action.payload
      }
    break;
    case CHANGE_DISCOUNT:
      state = {
        ...state,
        discount: action.payload
      }
    break;
    case AMOUNT_WITHOUT_TAXES:
      state = {
        ...state,
        amountWithoutTaxes: action.payload
      }
    break;
    case TOTAL_AMOUNT:
      state = {
        ...state,
        totalAmount: action.payload
      }
    break;
    default:
    break;
  }
  return state
}

const vatController = (state: any) => (next: any) => (action: any) => {
  if (action.type === CHANGE_VAT) {

  }
  next(action)
}

const store = createStore(reducer, {}, applyMiddleware(vatController))

export default store;
