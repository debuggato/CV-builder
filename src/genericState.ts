const UPDATE_IS_MODAL_OPENED: string = 'UPDATE_IS_MODAL_OPENED';
const SET_CURRENT_ACCORDION_ID: string = 'SET_CURRENT_ACCORDION_ID';

const genericState = {
  isModalOpened: false,
  currentAccordionId: '0',
};

// REDUCER
export const genericReducer = (state = genericState, action: any) => {
  switch (action.type) {
    case UPDATE_IS_MODAL_OPENED:
      state = {
        ...state,
        isModalOpened: action.payload,
      };
      break;
    case SET_CURRENT_ACCORDION_ID:
      state = {
        ...state,
        currentAccordionId: action.payload,
      };
      break;
    default:
      break;
  }
  return state;
};

// ACTIONS
export const updateIsModalOpened = (value: boolean) => ({
  type: UPDATE_IS_MODAL_OPENED,
  payload: value,
});

export const setCurrentAccordionId = (value: string) => ({
  type: SET_CURRENT_ACCORDION_ID,
  payload: value,
});
