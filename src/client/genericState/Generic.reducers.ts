import initialState from './Generic.state';
import * as type from './Generic.types';
import { ActionType } from './Generic.model';

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case type.SHOW_MODAL:
      return {
        ...state,
        showModal: action.value,
      };
    case type.CHANGE_LANGUAGE:
      return {
        ...state,
        lang: action.value,
      };
    case type.UPDATE_DOCUMENT_TITLE:
      return {
        ...state,
        documentTitle: action.value,
      };
    case type.CHOOSE_TEMPLATE:
      return {
        ...state,
        template: {
          ...state.template,
          selected: action.value
        },
      };
    case type.SHOW_LOADER:
      return {
        ...state,
        showLoader: action.value
      };
    default:
      return state;
  }
};

export default reducer;