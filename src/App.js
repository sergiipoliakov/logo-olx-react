import React, { Component } from 'react';
import './App.css';

import HomePage from './pages/HomePage';
import Modal from './Components/Modal';
import Login from './Components/Forms/auth/login';
import AddProduct from './Components/Forms/addProduct/AddProduct';

// import Header from './Components/Header';

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
      <>
        <button type="button" onClick={this.toggleModal}>
          открыть модалку
        </button>

        <HomePage />

        {showModal && (
          <Modal onModalClose={this.toggleModal}>
            {/* <Login onModalClose={this.toggleModal} /> */}
            <AddProduct onModalClose={this.toggleModal} />

            {/* <button type="button" onClick={this.toggleModal}>
            Закрыть
          </button> */}
          </Modal>
        )}
      </>
    );
  }
}
