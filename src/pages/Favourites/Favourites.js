import { useEffect } from 'react';
import { connect } from 'react-redux';
import { allCardsOperations } from '../../redux/cards';

// import { authSelectors } from '../../redux/auth';
import ProductList from '../../Components/Product/ProductCardList';
import { cardsSelectors, cardsOperations } from '../../redux/userCards';

function Favourites({
  cards,
  onGetUserFavouritCards,
  setAllCardsToCardsState,
}) {
  useEffect(() => {
    setAllCardsToCardsState(cards);
    onGetUserFavouritCards();
  }, []);

  return <ProductList items={cards} isFavouritesCardsPage={true} />;
}
const mapStateToProps = state => ({
  cards: cardsSelectors.getAllUserFavouritCards(state),
});

const mapDispatchToProps = {
  onGetUserFavouritCards: cardsOperations.fetchUserFavouritCards,
  setAllCardsToCardsState: allCardsOperations.setAllCardsToCardsState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
