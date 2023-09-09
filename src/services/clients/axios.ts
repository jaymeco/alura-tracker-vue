import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://0.0.0.0:3000'
});

export default httpClient;
