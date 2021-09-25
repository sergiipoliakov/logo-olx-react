import React, { Component, createContext } from 'react';

const Context = createContext();

export default class AuthContext extends Component {
  static Consumer = Context.Consumer;

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };
  onAddProductClick = () => {
    this.setState(state => ({
      showModal: true,
      modalContent: '/addProduct',
    }));
  };

  onEditProductClick = () => {
    this.setState(state => ({
      showModal: true,
      modalContent: '/editProductCard',
    }));
  };
  onReviewProductClick = () => {
    this.setState(state => ({
      showModal: true,
      modalContent: '/review',
    }));
  };

  onLoginClick = () => {
    this.setState(state => ({
      showModal: true,
      modalContent: '/login',
    }));
  };

  state = {
    showModal: false,
    modalContent: '',
    onAddProductClick: this.onAddProductClick,
    onEditProductClick: this.onEditProductClick,
    onLoginClick: this.onLoginClick,
    onToggleModal: this.toggleModal,
    onReviewProductClick: this.onReviewProductClick,
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
