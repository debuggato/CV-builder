const SHOW_MODAL: string = 'SHOW_MODAL';
const CHANGE_LANGUAGE: string = 'CHANGE_LANGUAGE';

interface ShowModalAction {
  type: typeof SHOW_MODAL;
  value: boolean;
}

interface ChangeLangAction {
  type: typeof CHANGE_LANGUAGE;
  value: string;
}

interface GenericState {
  showModal: boolean;
  lang: string;
}

const genericState: GenericState = {
  showModal: false,
  lang: 'en'
};

type ActionType = ShowModalAction & ChangeLangAction;

export interface ReduxProps {
  showModal: (arg0: boolean) => void;
}

// REDUCER
export const generic = (state = genericState, action: ActionType) => {
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
    default:
      return state;
  }
};

// ACTIONS
export const showModalAction = (value: boolean): ShowModalAction => ({
  type: SHOW_MODAL,
  value,
});

export const changeLangAction = (value: string): ChangeLangAction => ({
  type: CHANGE_LANGUAGE,
  value,
});
