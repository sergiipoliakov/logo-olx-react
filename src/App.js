import React, { Component } from 'react';
import './App.css';

import Container from './Components/UI/Container/Container';
import ProductCardList from './Components/Product/ProductCardList';
import Modal from './Components/Modal';
import Login from './Components/Forms/auth/login';
import AddProduct from './Components/Forms/addProduct/AddProduct';

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
    showModal: true,
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
            {/* <Login onModalClose={this.toggleModal} /> */}
            <AddProduct onModalClose={this.toggleModal} />

            {/* <button type="button" onClick={this.toggleModal}>
              Закрыть
            </button> */}
          </Modal>
        )}

        {/* <Header /> */}
        <ProductCardList items={cards} />
      </Container>
    );
  }
}
