import axios from 'axios';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmNmMjg1NDJkNTVkOTAwMTdhZTMzOGUiLCJzaWQiOiI2MTJmNzU4NmNhMjQyYjAwMTc4Njc5YmEiLCJpYXQiOjE2MzA1MDAyMzAsImV4cCI6MTYzMDUwMzgzMH0.QRecYOCfi_G-_ryYZh3H6TJhTBu528WEkKFaQdVxc6w`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export const loginUser = ({ email, password }) => {
  return axios.post('/auth/login', { email, password });
};
