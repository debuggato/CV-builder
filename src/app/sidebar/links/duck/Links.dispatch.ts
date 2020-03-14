import { Dispatch } from 'redux';

import * as action from './Links.actions';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setLabel: (id: number, value: string) => {
      dispatch(action.setLabel(id, value));
    },
    setLink: (id: number, value: string) => {
      dispatch(action.setLink(id, value));
    },
    addLink: (id: number, value: any) => {
      dispatch(action.addLink(id, value));
    },
  };
};

export default mapDispatchToProps;
