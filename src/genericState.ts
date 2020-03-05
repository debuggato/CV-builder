const UPDATE_IS_MODAL_OPENED: string = 'UPDATE_IS_MODAL_OPENED';

const genericState = {
  isModalOpened: false,
};

export const genericReducer = (state = genericState, action: any) => {
  switch (action.type) {
    case UPDATE_IS_MODAL_OPENED:
      state = {
        ...state,
        isModalOpened: action.payload,
      };
      break;
    default:
      break;
  }
  return state;
};

export const updateIsModalOpened = (value: boolean) => ({
  type: UPDATE_IS_MODAL_OPENED,
  payload: value,
});
