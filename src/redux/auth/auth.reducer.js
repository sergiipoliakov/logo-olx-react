import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authActions } from './';

const initialUserState = {
  name: null,
  email: null,
  calls: [],
  favourites: [],
  id: null,
};

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialUserState,
  // [authActions.getCurrentUserSuccess]: (state, { payload }) => {
  //   state.auth.token = payload.newAccessToken;
  //   state.auth.refreshToken = payload.newRefreshToken;
  //   state.auth.sib = payload.newSid;

  //   console.log('🚀 ~ file: auth.reducer.js ~ line 18 ~ state', state);

  //   return state;
  // },
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.accessToken,
  [authActions.loginSuccess]: (_, { payload }) => payload.accessToken,
  [authActions.logoutSuccess]: () => null,
  [authActions.getCurrentUserSuccess]: (_, { payload }) =>
    payload.newAccessToken,
});
const refreshToken = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.refreshToken,
  [authActions.loginSuccess]: (_, { payload }) => payload.refreshToken,
  [authActions.getCurrentUserSuccess]: (_, { payload }) =>
    payload.newRefreshToken,
  [authActions.logoutSuccess]: () => null,
});

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logoutSuccess]: () => false,
});

const sid = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.sid,
  [authActions.loginSuccess]: (_, { payload }) => payload.sid,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.newSid,
  [authActions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentUserError]: setError,
  [authActions.clearError]: () => null,
});

export default combineReducers({
  user,
  token,
  isAuthenticated,
  refreshToken,
  sid,
  error,
});
