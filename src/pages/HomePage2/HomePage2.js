import React, { Component } from 'react';
import styles from './HomePage2.module.css';

import PaginationBtns from '../../Components/UI/PaginationBtns';

import MyCarousel from '../../Components/Carousel/Carousel';

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

export default HomePage;
