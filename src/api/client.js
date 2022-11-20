import { create } from 'apisauce';
let baseURL = 'http://localhost:8080/api';
const apiClient = create({
  baseURL,
});

if (localStorage.getItem('jwt'))
  apiClient.setHeader('x-token', localStorage.getItem('jwt'));

export default apiClient;
