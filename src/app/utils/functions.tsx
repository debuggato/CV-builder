import API from './API'

import Loader from '../../components/loader/Loader.view'

export const addBlock = (context: any): void => {
  context.setState({
    clicks: context.state.clicks + 1,
    rows: context.state.rows.concat(context.state.clicks)
  })
}

export const saveData = (url: string, data: any): any => {
  API.post(`${url}.json`, {
    ...data
  },
  {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then((response) => {
    return response
  })
  .catch((error) => {
    return error
  });
}