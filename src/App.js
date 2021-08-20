import React, { Component } from 'react';
import './App.css';

import Container from './Components/UI/Container/Container';
import ProductCardList from './Components/Product/ProductCardList';
import Modal from './Components/Modal';

// import Header from './Components/Header';
const cards = [
  {
    id: 1,
    imageSrc: './Components/Product/ProductCard/Rectangle.jpg',
    oldPrice: 200,
    price: 100,
    title: 'Майка жіноча чорна',
  },
  {
    id: 2,
    imageSrc: './Components/Product/ProductCard/wolcvagen.jpg',
    oldPrice: 150000,
    price: 130000,
    title: 'Автобус',
  },
  {
    id: 3,
    imageSrc: './Components/Product/ProductCard/wolcvagen.jpg',
    oldPrice: 150000,
    price: 130000,
    title: 'Автобус',
  },
  {
    id: 4,
    imageSrc: './Components/Product/ProductCard/wolcvagen.jpg',
    oldPrice: 150000,
    price: 130000,
    title: 'Автобус',
  },
  {
    id: 5,
    imageSrc: './Components/Product/ProductCard/wolcvagen.jpg',
    oldPrice: 150000,
    price: 130000,
    title: 'Автобус',
  },
  {
    id: 6,
    imageSrc: './Components/Product/ProductCard/wolcvagen.jpg',
    oldPrice: 150000,
    price: 130000,
    title: 'Автобус',
  },
];

export default class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <Container>
        <button type="button" onClick={this.toggleModal}>
          открыть модалку
        </button>
        {showModal && (
          <Modal onModalClose={this.toggleModal}>
            <h1>Привет Это контент модалки</h1>
            <p>lorqweqweqw eqweqweqwe qweqweqwe lorem20</p>
            <button type="button" onClick={this.toggleModal}>
              Закрыть
            </button>
          </Modal>
        )}

        {/* <Header /> */}
        <ProductCardList items={cards} />
      </Container>
    );
  }
}
