const getAllCards = state => state.allCards.AllCards;

const getCardId = state => state.allCards.cardId;

const getReviewCard = state => {
  const id = getCardId(state);
  console.log('🚀 ~ file: allCards-selector.js ~ line 7 ~ id', id);

  const reviewCard = getAllCards(state).find(card =>
    card._id ? card._id === id : card.id === id,
  );
  console.log(
    '🚀 ~ file: allCards-selector.js ~ line 16 ~ reviewCard',
    reviewCard,
  );

  return reviewCard;
};
const selectors = {
  getReviewCard,
  getAllCards,
};
export default selectors;
