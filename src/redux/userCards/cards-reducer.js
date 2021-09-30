import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

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
  addCardToFavouritSuccess,
  deleteFavouritRequest,
  deleteFavouritSuccess,
  deleteFavouritError,
  // setCardIdRequest,
  setCardIdSuccess,
  setCardIdError,
  clearError,
} from './cards-actions';

const userCards = createReducer([], {
  [fetchUserCardsSuccess]: (_, { payload }) => payload.favourites,
  [addCardSuccess]: (state, { payload }) => [...state, payload],

  [editCardSuccess]: (state, { payload }) => [
    ...state.filter(({ _id }) => _id !== payload.id),
    payload,
  ],
  [deleteCardSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
});

const cardId = createReducer('', {
  [setCardIdSuccess]: (_, { payload }) => payload,
});

const favouritCards = createReducer([], {
  [fetchUserFavouritCardsSuccess]: (_, { payload }) => payload.favourites,
  [addCardToFavouritSuccess]: (state, { payload }) => [...state, ...payload],
  [deleteFavouritSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
});

const loading = createReducer(false, {
  [fetchUserCardsRequest]: () => true,
  [fetchUserCardsSuccess]: () => false,
  [fetchUserCardsError]: () => false,
  [fetchUserFavouritCardsRequest]: () => true,
  [fetchUserFavouritCardsSuccess]: () => false,
  [fetchUserFavouritCardsError]: () => false,
  [deleteFavouritRequest]: () => true,
  [deleteFavouritSuccess]: () => false,
  [deleteFavouritError]: () => false,
  [addCardRequest]: () => true,
  [addCardSuccess]: () => false,
  [addCardError]: () => false,
  [editCardRequest]: () => true,
  [editCardSuccess]: () => false,
  [editCardError]: () => false,
  [deleteCardRequest]: () => true,
  [deleteCardSuccess]: () => false,
  [deleteCardError]: () => false,
});
const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [fetchUserCardsError]: setError,
  [fetchUserFavouritCardsError]: setError,
  [addCardError]: setError,
  [deleteFavouritError]: setError,
  [deleteCardError]: setError,
  [editCardError]: setError,
  [setCardIdError]: setError,

  [clearError]: () => null,
});
export default combineReducers({
  userCards,
  favouritCards,
  cardId,
  loading,
  error,
});
