import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchAllCardsRequest,
  fetchAllCardsSuccess,
  fetchAllCardsError,
  // setCardIdRequest,
  setCardIdSuccess,
  setCardIdError,
  searchProductRequest,
  searchProductSuccess,
  searchProductError,
  clearError,
} from './allCards-action';

const cardId = createReducer('', {
  [setCardIdSuccess]: (_, { payload }) => payload,
});

const AllCards = createReducer([], {
  [fetchAllCardsSuccess]: (_, { payload }) => payload,
  [searchProductSuccess]: (_, { payload }) => payload,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [searchProductError]: setError,
  [fetchAllCardsError]: setError,
  [setCardIdError]: setError,

  [clearError]: () => null,
});
const loading = createReducer(false, {
  [fetchAllCardsRequest]: () => true,
  [fetchAllCardsSuccess]: () => false,
  [fetchAllCardsError]: () => false,

  [searchProductRequest]: () => true,
  [searchProductSuccess]: () => false,
  [searchProductError]: () => false,
});

export default combineReducers({
  AllCards,
  cardId,
  error,
  loading,
});
