import axios from 'axios'

export default axios.create({
  baseURL: 'https://cv-builder-fa6bf.firebaseio.com/',
  responseType: "json"
})