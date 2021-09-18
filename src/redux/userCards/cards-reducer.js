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
  deleteCardRequest,
  deleteCardSuccess,
  deleteCardError,
  addCardToFavouritSuccess,
  deleteFavouritRequest,
  deleteFavouritSuccess,
  deleteFavouritError,
  clearError,
} from './cards-actions';

const userCards = createReducer([], {
  [fetchUserCardsSuccess]: (_, { payload }) => payload.favourites,
  [addCardSuccess]: (state, { payload }) => [...state, payload],
  [deleteCardSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
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
  [deleteCardRequest]: () => true,
  [deleteCardSuccess]: () => false,
  [deleteCardError]: () => false,
});
const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [fetchUserCardsError]: setError,
  [fetchUserFavouritCardsError]: setError,
  [deleteFavouritError]: setError,
  [deleteCardError]: setError,

  [clearError]: () => null,
});
export default combineReducers({
  userCards,
  favouritCards,
  loading,
  error,
});
