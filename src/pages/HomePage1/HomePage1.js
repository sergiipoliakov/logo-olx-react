import React, { Component } from 'react';
import styles from './HomePage1.module.css';

import MyCarousel from '../../Components/Carousel/Carousel';
import PaginationBtns from '../../Components/UI/PaginationBtns';

import { getCards } from '../../services/cardsService';

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
    const { data } = await getCards();

    this.setState(prevState => ({
      cards: data,
    }));
  }

  render() {
    const { cards } = this.state;

    return (
      <div className={styles.container}>
        <MyCarousel items={cards.sales} title="Розпродаж та різне" to="trade" />
        <MyCarousel items={cards.free} title="Відпочинок та спорт" to="/free" />
        <MyCarousel
          items={cards.recreationAndSport}
          title="Віддам безкоштовно"
          to="/recreationAndSport"
        />
        <MyCarousel
          items={cards.businessAndServices}
          title="Бізнес та послуги"
          to="/businessAndServices"
        />
        <PaginationBtns />
      </div>
    );
  }
}

export default HomePage;
