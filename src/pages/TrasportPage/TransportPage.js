import React, { Component } from 'react';
import ProductList from '../../Components/Product/ProductCardList';
import { getCategoryCards } from '../../services/cardsService';

export default class TransportPage extends Component {
  state = {
    cards: [],
  };

  async componentDidMount() {
    const catygoryQuerty = this.props.location.pathname;
    const { data } = await getCategoryCards(catygoryQuerty);
    this.setState(prevState => ({
      cards: data,
    }));
  }
  render() {
    const { cards } = this.state;
    return <ProductList items={cards} />;
  }
}
