import React, { Component } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import withShowModal from '../hoc/withShowModal';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener(
      'keydown',

      this.handleKeyDown,
    );
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.value.onToggleModal();
    }
  };
  handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.value.onToggleModal();
    }
  };

  render() {
    return createPortal(
      <div className={styles.modalBackdrop} onClick={this.handleClickBackdrop}>
        <div className={styles.modalContent}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default withShowModal(Modal);
