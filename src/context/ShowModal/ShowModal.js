import React, { Component, createContext } from 'react';

const Context = createContext();

export default class AuthContext extends Component {
  static Consumer = Context.Consumer;

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };
  onAddProductClick = () => {
    console.log('qweqwe');
    this.setState(state => ({
      showModal: true,
      modalContent: '/addProduct',
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
    onLoginClick: this.onLoginClick,
    onToggleModal: this.toggleModal,
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
