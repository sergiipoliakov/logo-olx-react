import { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductList from '../../Components/Product/ProductCardList';
import { cardsOperations, cardsSelectors } from '../../redux/userCards';

function UserCardsPage({ cards, onGetUserCards }) {
  useEffect(() => {
    onGetUserCards();
  }, []);

  return <ProductList items={cards} isUserCardsPage={true} />;
}
const mapStateToProps = state => ({
  cards: cardsSelectors.getAllUserCards(state),
});
const mapDispatchToProps = {
  onGetUserCards: cardsOperations.fetchUserCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCardsPage);
