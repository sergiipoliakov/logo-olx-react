import axios from 'axios';

import {
  fetchAllCardsRequest,
  fetchAllCardsSuccess,
  fetchAllCardsError,
  setCardIdRequest,
  setCardIdSuccess,
  setCardIdError,
  searchProductRequest,
  searchProductSuccess,
  searchProductError,
  clearError,
} from './allCards-action';

const setAllCardsToCardsState = cards => dispatch => {
  dispatch(fetchAllCardsRequest());

  try {
    dispatch(fetchAllCardsSuccess(cards));
  } catch (error) {
    dispatch(fetchAllCardsError(error));
  }
};

const cardId = id => dispatch => {
  dispatch(setCardIdRequest());

  try {
    dispatch(setCardIdSuccess(id));
  } catch (error) {
    dispatch(setCardIdError(error));
  }
};

const searchProduct = query => async dispatch => {
  dispatch(searchProductRequest());

  try {
    const { data } = await axios.get(`/call/find?search=${query}`);
    dispatch(searchProductSuccess(data));
    dispatch(clearError());
  } catch (error) {
    if (error.response) {
      dispatch(searchProductError(error.response));
    }
  }
};

const operations = {
  setAllCardsToCardsState,
  cardId,
  searchProduct,
};

export default operations;
