import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import styles from './Navigation.module.css';
import PrimaryButton from '../../UI/buttons/PrimaryButton';
import { ReactComponent as SearchIcon } from '../../../icons/search.svg';
import withShowModal from '../../hoc/withShowModal';
import { authSelectors } from '../../../redux/auth';

const Navigation = ({ value, isAuthenticated }) => {
  const { onAddProductClick } = value;

  return (
    <div className={styles.authNav}>
      <div>
        <Link to="/search" className={styles.search}>
          <SearchIcon />
        </Link>
      </div>
      <div>
        <Link to="/page=1" className={styles.logo}>
          LOGO
        </Link>
      </div>
      <div className={styles.userMenu}>
        {isAuthenticated ? <UserMenu /> : <AuthNav />}

        <PrimaryButton className={styles.button} onClick={onAddProductClick}>
          СТВОРИТИ ОГОЛОШЕННЯ!
        </PrimaryButton>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default withShowModal(connect(mapStateToProps)(Navigation));
