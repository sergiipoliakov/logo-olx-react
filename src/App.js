import React, { Component } from 'react';
import './App.css';

import Route from './router/Router';
import Modal from './Components/Modal';
import Login from './Components/Forms/auth/login';
import AddProduct from './Components/Forms/addProduct/AddProduct';
import ReviewCard from './Components/Reviews';

import Header from './Components/Header';

export default class App extends Component {
  state = {
    showModal: false,
    modalContent: 'addProduct',
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  onLoginClick = () => {
    this.setState(state => ({
      showModal: true,
      modalContent: 'login',
    }));
  };
  onAddProductClick = () => {
    this.setState(state => ({
      showModal: true,
      modalContent: 'addProduct',
    }));
  };
  onReviewClick = () => {
    this.setState(state => ({
      showModal: true,
      modalContent: 'review',
    }));
  };

  render() {
    const { showModal, modalContent } = this.state;
    return (
      <>
        <Header />

        <button type="button" onClick={this.onLoginClick}>
          открыть модалку login
        </button>
        <button type="button" onClick={this.onAddProductClick}>
          открыть addProduct
        </button>
        <button type="button" onClick={this.onReviewClick}>
          открыть review
        </button>

        <Route />

        {showModal && (
          <Modal onModalClose={this.toggleModal}>
            {modalContent === 'login' && (
              <Login onModalClose={this.toggleModal} />
            )}
            {modalContent === 'review' && (
              <ReviewCard onModalClose={this.toggleModal} />
            )}
            {modalContent === 'addProduct' && (
              <AddProduct onModalClose={this.toggleModal} />
            )}

            {/* <button type="button" onClick={this.toggleModal}>
            Закрыть
          </button> */}
          </Modal>
        )}
      </>
    );
  }
}
