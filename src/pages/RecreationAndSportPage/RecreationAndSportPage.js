import React, { Component } from 'react';

import { connect } from 'react-redux';
import { allCardsOperations } from '../../redux/cards';

import ProductList from '../../Components/Product/ProductCardList';
import { getCategoryCards } from '../../services/cardsService';

class RecreationAndSportPage extends Component {
  state = {
    cards: [],
  };

  async componentDidMount() {
    const catygoryQuerty = this.props.location.pathname;
    const { data } = await getCategoryCards(catygoryQuerty);

    this.props.setAllCardsToCardsState(data);

    this.setState(prevState => ({
      cards: data,
    }));
  }
  render() {
    const { cards } = this.state;
    return <ProductList items={cards} />;
  }
}

const mapDispatchToProps = {
  setAllCardsToCardsState: allCardsOperations.setAllCardsToCardsState,
};

export default connect(null, mapDispatchToProps)(RecreationAndSportPage);
