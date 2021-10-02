const getAllCards = state => state.allCards.AllCards;

const getCardId = state => state.allCards.cardId;

const getReviewCard = state => {
  const id = getCardId(state);

  const reviewCard = getAllCards(state).find(card => card._id === id);

  return reviewCard;
};
const selectors = {
  getReviewCard,
  getAllCards,
};
export default selectors;
