import React, { Component } from 'react';
import styles from './SearchForm.module.css';
import { connect } from 'react-redux';
import AuthCard from '../../Forms/auth-card/AuthCard';
import IconButton from '../../UI/IconButton';

import { ReactComponent as CloseIcon } from '../../../icons/close.svg';
import { ReactComponent as SearchIcon } from '../../../icons/search.svg';

export default class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({
      query: event.target.value,
    });
  };

  handlSubmit = event => {
    event.preventDefault();
    console.log(this.state.query);
  };

  render() {
    return (
      <AuthCard className={styles.authCard}>
        <IconButton
          onClick={this.props.onModalClose}
          className={styles.closeBtn}
          aria-label="Закрыть модалку"
        >
          <CloseIcon />
        </IconButton>
        <form onSubmit={this.handlSubmit}>
          <input onChange={this.handleChange} />
          <IconButton
            className={styles.search}
            aria-label="поиск"
            type="submit"
          >
            <SearchIcon />
          </IconButton>
        </form>
      </AuthCard>
    );
  }
}
