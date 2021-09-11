import React, { Component } from 'react';
import ProductList from '../../Components/Product/ProductCardList';
import { getCards } from '../../services/cardsService';

class HomePage extends Component {
  state = {
    cards: [],
  };
  async componentDidMount() {
    const { data } = await getCards();
    this.setState(prevState => ({
      cards: data.sales,
    }));
  }
  render() {
    const { cards } = this.state;
    return (
      <>
        <ProductList items={cards} />
        <ProductList items={cards} />
      </>
    );
  }
}

export default HomePage;
