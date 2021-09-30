import axios from 'axios';
import { authActions } from './';

axios.defaults.baseURL = 'https://callboard-backend.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/auth/register', credentials);

    token.set(response.data.accessToken);
    dispatch(authActions.registerSuccess(response.data));
    dispatch(authActions.clearError());
  } catch (error) {
    if (error.response) {
      dispatch(authActions.registerError(error.response.data));
      return;
    }
    dispatch(authActions.registerError(error.message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post('/auth/login', credentials);

    token.set(response.data.accessToken);
    dispatch(authActions.loginSuccess(response.data));
    dispatch(authActions.clearError());
  } catch (error) {
    if (error.response) {
      dispatch(authActions.loginError(error.response.data));
      return;
    }
    dispatch(authActions.loginError(error.message));
  }
};
const logInWithGoogle = () => async dispatch => {
  dispatch(authActions.loginWithGoogleRequest());

  try {
    const response = await axios.get('/auth/google');

    token.set(response.data.accessToken);
    dispatch(authActions.loginWithGoogleSuccess(response.data));
    dispatch(authActions.clearError());
  } catch (error) {
    if (error.response) {
      dispatch(authActions.loginWithGoogleError(error.response.data));
      return;
    }
    dispatch(authActions.loginWithGoogleError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('auth/logout');

    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
    auth: { sid },
    auth: { refreshToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  const data = JSON.stringify({
    sid,
  });

  const config = {
    method: 'post',
    url: 'https://callboard-backend.herokuapp.com/auth/refresh',
    headers: {
      Authorization: `Bearer ${refreshToken}`,
      'Content-Type': 'application/json',
    },
    data: data,
  };
  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios(config);
    dispatch(authActions.getCurrentUserSuccess(response.data));
    token.set(response.data.newAccessToken);
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

export default { register, logOut, logIn, getCurrentUser, logInWithGoogle };
