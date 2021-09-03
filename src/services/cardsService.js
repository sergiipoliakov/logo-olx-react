import axios from 'axios';
axios.defaults.baseURL = 'https://callboard-backend.herokuapp.com';

export const getCards = () => {
  return axios.get('/call?page=1');
};

export const getCategoryCards = categoryQuery => {
  return axios.get(`/call/specific${categoryQuery}`);
};
