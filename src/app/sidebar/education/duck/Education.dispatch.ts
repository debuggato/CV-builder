import { Dispatch } from 'redux';

import * as action from './Education.actions';
import { ReduxProps } from './Education.model';

const mapDispatchToProps = (dispatch: Dispatch): ReduxProps => {
  return {
    addEducation: (id, value) => {
      dispatch(action.addEducation(id, value));
    },
    setSchool: (id, value) => {
      dispatch(action.setSchool(id, value));
    },
    setDegree: (id, value) => {
      dispatch(action.setDegree(id, value));
    },
    setCity: (id, value) => {
      dispatch(action.setCity(id, value));
    },
    setDescription: (id, value) => {
      dispatch(action.setDescription(id, value));
    },
  };
};

export default mapDispatchToProps;
