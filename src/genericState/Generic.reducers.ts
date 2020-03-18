import initialState from './Generic.state';
import { SHOW_MODAL, CHANGE_LANGUAGE, PREVIEW_PDF } from './Generic.types';
import { ActionType } from './Generic.model';

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModal: action.value,
      };
    case CHANGE_LANGUAGE:
      return {
        ...state,
        lang: action.value,
      };
    case PREVIEW_PDF:
      return {
        ...state,
        previewPdf: action.value,
      };
    default:
      return state;
  }
};

export default reducer;