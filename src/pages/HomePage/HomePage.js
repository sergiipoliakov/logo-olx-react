import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../../Components/Product/ProductCardList';

import { getCards } from '../../services/cardsService';
import cardsOperations from '../../redux/userCards/cards-operations';
import cardsSelectors from '../../redux/userCards/cards-selectors';
class HomePage extends Component {
  state = {
    cards: {
      businessAndServices: [],
      free: [],
      recreationAndSport: [],
      sales: [],
    },
  };
  async componentDidMount() {
    // this.props.getCards();

    // console.log(this.props.cards.sales);
    const { data } = await getCards();

    this.setState(prevState => ({
      cards: data,
    }));
  }
  render() {
    const { cards } = this.state;

    return (
      <>
        <ProductList items={cards.businessAndServices} />
        <ProductList items={cards.free} />
        <ProductList items={cards.recreationAndSport} />
        <ProductList items={cards.sales} />
      </>
    );
  }
}

export default HomePage;
