import axios from 'axios';
axios.defaults.baseURL = 'https://callboard-backend.herokuapp.com';

export const getCards = (pageNum = 1) => {
  return axios.get(`/call?page=${pageNum}`);
};

export const getCategoryCards = categoryQuery => {
  return axios.get(`/call/specific${categoryQuery}`);
};
