import { useEffect } from 'react';
import { connect } from 'react-redux';
// import { authSelectors } from '../../redux/auth';
import ProductList from '../../Components/Product/ProductCardList';
import { cardsSelectors, cardsOperations } from '../../redux/userCards';

function Favourites({ cards, onGetUserFavouritCards }) {
  useEffect(() => {
    onGetUserFavouritCards();
  }, []);

  return <ProductList items={cards} isFavouritesCardsPage={true} />;
}
const mapStateToProps = state => ({
  cards: cardsSelectors.getAllUserFavouritCards(state),
});

const mapDispatchToProps = {
  onGetUserFavouritCards: cardsOperations.fetchUserFavouritCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
