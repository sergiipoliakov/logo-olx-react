import axios from 'axios';
axios.defaults.baseURL = 'https://callboard-backend.herokuapp.com/call?page=1';

export const getCards = () => {
  return axios.get();
};
