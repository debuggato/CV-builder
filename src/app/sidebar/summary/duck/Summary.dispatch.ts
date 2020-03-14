import { Dispatch } from 'redux';

import * as action from './Summary.actions';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setSummary: (value: string) => {
      dispatch(action.setSummary(value));
    },
  };
};

export default mapDispatchToProps;
