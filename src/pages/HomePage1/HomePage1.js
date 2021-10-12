import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './HomePage1.module.css';

import MyCarousel from '../../Components/Carousel';
import PaginationBtns from '../../Components/UI/PaginationBtns';
import { allCardsOperations } from '../../redux/cards';

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

    const cards = [
      ...data.sales,
      ...data.free,
      ...data.recreationAndSport,
      ...data.businessAndServices,
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
        <MyCarousel items={cards.sales} title="Розпродаж та різне" to="trade" />
        <MyCarousel items={cards.free} title=" Віддам безкоштовно" to="/free" />
        <MyCarousel
          items={cards.recreationAndSport}
          title="Відпочинок та спорт"
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

const mapDispatchToProps = {
  setAllCardsToCardsState: allCardsOperations.setAllCardsToCardsState,
};

export default connect(null, mapDispatchToProps)(HomePage);
