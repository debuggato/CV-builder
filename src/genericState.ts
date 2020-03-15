const SHOW_MODAL: string = 'SHOW_MODAL';

interface ShowModalAction {
  type: typeof SHOW_MODAL;
  value: boolean;
}

interface GenericState {
  showModal: boolean;
}

const genericState: GenericState = {
  showModal: false,
};

type ActionType = ShowModalAction;

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
    default:
      return state;
  }
};

// ACTIONS
export const showModalAction = (value: boolean): ShowModalAction => ({
  type: SHOW_MODAL,
  value,
});
