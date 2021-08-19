import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchAllPostersRequest,
  fetchAllPostersSuccess,
  fetchAllPostersError,
  clearError,
} from './posters-actions';

const posters = createReducer([], {
  [fetchAllPostersSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchAllPostersRequest]: () => true,
  [fetchAllPostersSuccess]: () => false,
  [fetchAllPostersError]: () => false,
});
const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [fetchAllPostersError]: setError,
  [clearError]: () => null,
});
export default combineReducers({
  posters,
  loading,
  error,
});
