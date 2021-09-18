const getLoading = state => state.cards.loading;
const getAllUserCards = state => state.cards.userCards;
const getAllUserFavouritCards = state => state.cards.favouritCards;

export default {
  getAllUserCards,
  getAllUserFavouritCards,
  getLoading,
};
