import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthNav.module.css';
import PrimaryButton from '../../UI/buttons/PrimaryButton';
import { ReactComponent as SearchIcon } from '../../../icons/search.svg';
import withShowModal from '../../hoc/withShowModal';

const AuthNav = ({ value }) => {
  const { onLoginClick, onAddProductClick } = value;

  return (
    <div className={styles.authNav}>
      <div>
        <Link to="/search" className={styles.search}>
          <SearchIcon />
        </Link>
      </div>
      <div>
        <Link to="/" className={styles.logo}>
          LOGO
        </Link>
      </div>
      <ul className={styles.authList}>
        <li>
          <button className={styles.authLink}>Реєстрація /</button>
        </li>
        <li>
          <button className={styles.authLink} onClick={onLoginClick}>
            Увійти
          </button>
        </li>
        <li>
          <PrimaryButton className={styles.button} onClick={onAddProductClick}>
            СТВОРИТИ ОГОЛОШЕННЯ!
          </PrimaryButton>
        </li>
      </ul>
    </div>
  );
};

export default withShowModal(AuthNav);