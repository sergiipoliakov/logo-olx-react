// const getIsAuthenticated = state => Boolean(state?.auth?.token);
const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUserCards = state => state.auth.user.calls;
const getUserFavoriteCards = state => state.auth.user.favourites;
const getErrorMessage = state => state.auth.error;

const selectors = {
  getUserCards,
  getUserFavoriteCards,
  getIsAuthenticated,
  getErrorMessage,
};

export default selectors;
