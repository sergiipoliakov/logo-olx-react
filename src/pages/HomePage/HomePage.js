import React, { Component } from 'react';
import styles from './HomePage.module.css';
import Container from '../../Components/UI/Container/Container';
import ProductList from '../../Components/Product/ProductCardList';
import { getCards } from '../../services/cardsService';

class HomePage extends Component {
  state = {
    cards: [],
  };
  async componentDidMount() {
    const { data } = await getCards();
    this.setState(prevState => ({ cards: data.free }));
  }
  render() {
    console.log(this.state);
    const { cards } = this.state;
    console.log(cards.free);
    return (
      <main className={styles.homepage}>
        <Container>
          <ProductList items={cards} />
        </Container>
      </main>
    );
  }
}

export default HomePage;
