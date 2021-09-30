const getLoading = state => state.cards.loading;
const getAllUserCards = state => state.cards.userCards;
const getAllUserFavouritCards = state => state.cards.favouritCards;
const getCardId = state => state.cards.cardId;
const getErrorMessage = state => state.cards.error;
const getEditCard = state => {
  const id = getCardId(state);
  const editCard = getAllUserCards(state).find(card => card._id === id);
  return editCard;
};

export default {
  getAllUserCards,
  getEditCard,
  getAllUserFavouritCards,
  getLoading,
  getErrorMessage,
};
