import React, { Component } from 'react';
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

export default HomePage3;
