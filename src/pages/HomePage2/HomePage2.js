import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './HomePage2.module.css';

import PaginationBtns from '../../Components/UI/PaginationBtns';

import MyCarousel from '../../Components/Carousel/Carousel';
import { allCardsOperations } from '../../redux/cards';

import { getCards } from '../../services/cardsService';

class HomePage extends Component {
  state = {
    cards: {
      electronics: [],
      trade: [],
      transport: [],
      work: [],
    },
  };

  async componentDidMount() {
    const { data } = await getCards(2);

    const cards = [
      ...data.electronics,
      ...data.trade,
      ...data.transport,
      ...data.work,
    ];

    if (data) {
      this.props.setAllCardsToCardsState(cards);
    }

    this.setState(prevState => ({
      cards: data,
    }));
  }

  render() {
    const { cards } = this.state;

    return (
      <div className={styles.container}>
        <MyCarousel
          items={cards.electronics}
          title="Електроніка"
          to="/electronics"
        />
        <MyCarousel items={cards.trade} title="Обмін" to="/trade" />
        <MyCarousel items={cards.transport} title="Транспорт" to="/transport" />
        <MyCarousel items={cards.work} title="Робота" to="/work" />

        <PaginationBtns />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setAllCardsToCardsState: allCardsOperations.setAllCardsToCardsState,
};

export default connect(null, mapDispatchToProps)(HomePage);
