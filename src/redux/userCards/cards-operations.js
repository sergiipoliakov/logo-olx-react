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
  editCardRequest,
  editCardSuccess,
  editCardError,
  deleteCardRequest,
  deleteCardSuccess,
  deleteCardError,
  addCardToFavouritRequest,
  addCardToFavouritSuccess,
  addCardToFavouritError,
  deleteFavouritRequest,
  deleteFavouritSuccess,
  deleteFavouritError,
  setCardIdRequest,
  setCardIdSuccess,
  setCardIdError,
  clearError,
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

//

const addCard = formdata => async dispatch => {
  dispatch(addCardRequest());
  try {
    const { data } = await axios.post('/call', formdata);
    dispatch(addCardSuccess(data));
    dispatch(clearError());
  } catch (error) {
    if (error.response) {
      dispatch(addCardError(error.response.data));
      return;
    }
    dispatch(addCardError(error.message));
  }
};

const editCard = (id, formdata) => async dispatch => {
  dispatch(editCardRequest());

  try {
    const { data } = await axios.patch(`/call/${id}`, formdata);

    dispatch(editCardSuccess(data));
    dispatch(clearError());
  } catch (error) {
    if (error.response) {
      dispatch(editCardError(error.response.data));
      return;
    }
    dispatch(editCardError(error));
  }
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

const cardId = id => dispatch => {
  dispatch(setCardIdRequest());

  try {
    dispatch(setCardIdSuccess(id));
  } catch (error) {
    console.log('🚀 ~ file: cards-operations.js ~ line 118 ~ error', error);

    dispatch(setCardIdError(error));
  }
};

export default {
  fetchUserCards,
  addCard,
  editCard,
  deleteCard,
  addCardToFavourit,
  fetchUserFavouritCards,
  deleteFavourit,
  cardId,
};
