import * as action from './actions'

const mapDispatchToProps = (dispatch: any) => {
  return {
    sendJobDescriptionToStore: (value: string) => {
      dispatch(action.setJobDescription(value))
    }
  }
}

export default mapDispatchToProps

