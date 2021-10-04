import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import styles from './Navigation.module.css';
import PrimaryButton from '../../UI/buttons/PrimaryButton';
import IconButton from '../../UI/IconButton';
import { ReactComponent as SearchIcon } from '../../../icons/search.svg';
import withShowModal from '../../hoc/withShowModal';
import { authSelectors } from '../../../redux/auth';
import { paths } from '../../../router/Router';

const Navigation = ({ value, isAuthenticated }) => {
  const { onAddProductClick, onSearchFormClick } = value;

  return (
    <div className={styles.authNav}>
      <div>
        <IconButton
          className={styles.search}
          onClick={onSearchFormClick}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </div>
      <div>
        <Link to={paths.MAIN} className={styles.logo}>
          LOGO
        </Link>
      </div>
      <div className={styles.userMenu}>
        {isAuthenticated ? <UserMenu /> : <AuthNav />}

        <PrimaryButton
          disabled={!isAuthenticated}
          className={styles.button}
          onClick={onAddProductClick}
        >
          <span>СТВОРИТИ ОГОЛОШЕННЯ!</span>
        </PrimaryButton>
        <PrimaryButton
          disabled={!isAuthenticated}
          className={styles.buttonMobile}
          onClick={onAddProductClick}
        >
          +
        </PrimaryButton>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default withShowModal(connect(mapStateToProps)(Navigation));
