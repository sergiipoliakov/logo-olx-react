import React, { Component } from 'react';
import { withRouter } from 'react-router';

import styles from './SearchForm.module.css';
import { connect } from 'react-redux';
import { allCardsOperations } from '../../../redux/cards';
import AuthCard from '../../Forms/auth-card/AuthCard';
import IconButton from '../../UI/IconButton';

import { ReactComponent as CloseIcon } from '../../../icons/close.svg';
import { ReactComponent as SearchIcon } from '../../../icons/search.svg';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({
      query: event.target.value,
    });
  };

  handlSubmit = async event => {
    event.preventDefault();

    if (this.state.query === '') {
      return;
    }
    await this.props.onSearchProduct(this.state.query);

    this.props.history.push('/search');
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
// const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onSearchProduct: allCardsOperations.searchProduct,
};

export default withRouter(connect(null, mapDispatchToProps)(SearchForm));
