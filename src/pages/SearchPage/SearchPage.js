import React, { Component } from 'react';

import { connect } from 'react-redux';

import ProductList from '../../Components/Product/ProductCardList';

import allCardsSelector from '../../redux/cards/allCards-selector';

class SearchPage extends Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    if (this.props.cards) {
      this.setState(prevState => ({
        cards: this.props.cards,
      }));
    }
  }
  componentDidUpdate() {
    if (this.state.cards !== this.props.cards) {
      this.setState(prevState => ({
        cards: this.props.cards,
      }));
    }
  }

  render() {
    const { cards } = this.state;

    return (
      <>
        {cards.length === 0 ? (
          <h2>Нечего не найдено</h2>
        ) : (
          <ProductList items={cards} />
        )}
      </>
    );
  }
}
const mapStateToProps = state => ({
  cards: allCardsSelector.getAllCards(state),
});

export default connect(mapStateToProps)(SearchPage);
