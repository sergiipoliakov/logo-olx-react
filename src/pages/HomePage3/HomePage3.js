import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allCardsOperations } from '../../redux/cards';

import styles from './HomePage3.module.css';
import PaginationBtns from '../../Components/UI/PaginationBtns';

import MyCarousel from '../../Components/Carousel/Carousel';

import { getCards } from '../../services/cardsService';

class HomePage3 extends Component {
  state = {
    cards: {
      property: [],
    },
  };

  async componentDidMount() {
    const { data } = await getCards(3);

    const allCards = [...data.property];

    if (data) {
      this.props.setAllCardsToCardsState(allCards);
    }

    this.setState(prevState => ({
      cards: data,
    }));
  }

  render() {
    const { cards } = this.state;

    return (
      <div className={styles.container}>
        <MyCarousel items={cards.property} title="Нерухомість" to="property" />

        <PaginationBtns />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setAllCardsToCardsState: allCardsOperations.setAllCardsToCardsState,
};

export default connect(null, mapDispatchToProps)(HomePage3);
