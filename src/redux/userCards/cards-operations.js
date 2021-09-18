import axios from 'axios';
import {
  fetchUserCardsRequest,
  fetchUserCardsSuccess,
  fetchUserCardsError,
  fetchUserFavouritCardsRequest,
  fetchUserFavouritCardsSuccess,
  fetchUserFavouritCardsError,
  addCardRequest,
  addCardSuccess,
  addCardError,
  deleteCardRequest,
  deleteCardSuccess,
  deleteCardError,
  addCardToFavouritRequest,
  addCardToFavouritSuccess,
  addCardToFavouritError,
  deleteFavouritRequest,
  deleteFavouritSuccess,
  deleteFavouritError,
} from './cards-actions';

axios.defaults.baseURL = 'https://callboard-backend.herokuapp.com';

const fetchUserCards = () => async dispatch => {
  dispatch(fetchUserCardsRequest());
  try {
    const { data } = await axios.get('/call/own');
    dispatch(fetchUserCardsSuccess(data));
  } catch (error) {
    dispatch(fetchUserCardsError(error));
  }
};
const fetchUserFavouritCards = () => async dispatch => {
  dispatch(fetchUserFavouritCardsRequest());
  try {
    const { data } = await axios.get('call/favourites');
    dispatch(fetchUserFavouritCardsSuccess(data));
  } catch (error) {
    dispatch(fetchUserFavouritCardsError(error));
  }
};
const addCard = formdata => dispatch => {
  dispatch(addCardRequest());

  axios
    .post('/call', formdata)
    .then(({ data }) => dispatch(addCardSuccess(data)))
    .catch(error => dispatch(addCardError(error.message)));
};
const deleteCard = id => dispatch => {
  dispatch(deleteCardRequest());

  axios
    .delete(`call/${id}`)
    .then(() => dispatch(deleteCardSuccess(id)))
    .catch(error => dispatch(deleteCardError(error.message)));
};

const addCardToFavourit = id => dispatch => {
  dispatch(addCardToFavouritRequest());

  axios
    .post(`call/favourite/${id}`)
    .then(({ data }) => dispatch(addCardToFavouritSuccess(data.newFavourites)))
    .catch(error => dispatch(addCardToFavouritError(error.message)));
};

const deleteFavourit = id => dispatch => {
  dispatch(deleteFavouritRequest());

  axios
    .delete(`call/favourite/${id}`)
    .then(() => dispatch(deleteFavouritSuccess(id)))
    .catch(error => dispatch(deleteFavouritError(error.message)));
};

export default {
  fetchUserCards,
  addCard,
  deleteCard,
  addCardToFavourit,
  fetchUserFavouritCards,
  deleteFavourit,
};
