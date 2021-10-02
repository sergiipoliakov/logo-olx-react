import React, { Component } from 'react';

import { connect } from 'react-redux';

import ProductList from '../../Components/Product/ProductCardList';

import allCardsSelector from '../../redux/cards/allCards-selector';

class SearchPage extends Component {
  state = {
    cards: [],
  };

  async componentDidMount() {
    if (this.props.cards) {
      this.setState(prevState => ({
        cards: this.props.cards,
      }));
    }
  }

  render() {
    const { cards } = this.state;
    return <ProductList items={cards} />;
  }
}
const mapStateToProps = state => ({
  cards: allCardsSelector.getAllCards(state),
});

export default connect(mapStateToProps)(SearchPage);
