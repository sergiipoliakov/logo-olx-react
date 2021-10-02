import { useEffect } from 'react';
import { connect } from 'react-redux';
import { allCardsOperations } from '../../redux/cards';

import ProductList from '../../Components/Product/ProductCardList';
import { cardsOperations, cardsSelectors } from '../../redux/userCards';

function UserCardsPage({ cards, onGetUserCards, setAllCardsToCardsState }) {
  useEffect(() => {
    setAllCardsToCardsState(cards);
    onGetUserCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ProductList items={cards} isUserCardsPage={true} />;
}
const mapStateToProps = state => ({
  cards: cardsSelectors.getAllUserCards(state),
});
const mapDispatchToProps = {
  onGetUserCards: cardsOperations.fetchUserCards,
  setAllCardsToCardsState: allCardsOperations.setAllCardsToCardsState,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCardsPage);
