import axios from 'redaxios';

export default axios.create({
  baseURL: 'http://localhost:3001'
})