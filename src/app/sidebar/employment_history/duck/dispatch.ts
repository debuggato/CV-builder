import { Dispatch } from 'redux';

import * as action from './actions';
import { ReduxProps } from './model';

const mapDispatchToProps = (dispatch: Dispatch): ReduxProps => {
  return {
    addEmployment: (id, value) => {
      dispatch(action.addEmployment(id, value));
    },
    setJobTitle: (id, value) => {
      dispatch(action.setJobTitle(id, value));
    },
    setEmployer: (id, value) => {
      dispatch(action.setEmployer(id, value));
    },
    setCity: (id, value) => {
      dispatch(action.setCity(id, value));
    },
    setStartDate: (id, value) => {
      dispatch(action.setStartDate(id, value));
    },
    setEndDate: (id, value) => {
      dispatch(action.setEndDate(id, value));
    },
    setDescription: (id, value) => {
      dispatch(action.setDescription(id, value));
    },
  };
};

export default mapDispatchToProps;
