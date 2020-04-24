import { Dispatch } from 'redux';
import * as action from './Skills.actions';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addSkill: (id: number, value: any) => {
      dispatch(action.addSkill(id, value));
    },
    setName: (id: number, value: string) => {
      dispatch(action.setName(id, value));
    },
    setLevel: (id: number, value: string) => {
      dispatch(action.setLevel(id, value));
    },
  };
};

export default mapDispatchToProps;
