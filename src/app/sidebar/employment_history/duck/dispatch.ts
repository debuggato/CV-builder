import * as action from './actions';

const mapDispatchToProps = (dispatch: any) => {
  return {
    addEmployment: (id: number, value: any) => {
      dispatch(action.addEmployment(id, value));
    },
    sendJobTitleToStore: (value: string) => {
      dispatch(action.setJobTitle(value));
    },
    sendEmployerToStore: (value: string) => {
      dispatch(action.setEmployer(value));
    },
    sendCityToStore: (value: string) => {
      dispatch(action.setCity(value));
    },
    sendStartDateToStore: (value: string) => {
      dispatch(action.setStartDate(value));
    },
    sendEndDateToStore: (value: string) => {
      dispatch(action.setEndDate(value));
    },
    sendDescriptionToStore: (value: string) => {
      dispatch(action.setDescription(value));
    },
  };
};

export default mapDispatchToProps;
