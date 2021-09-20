import React from 'react';
import styles from './PaginationBtns.module.css';
import { paths } from '../../../router/Router';
import { NavLink } from 'react-router-dom';

function PaginationBtns() {
  return (
    <div>
      <NavLink
        to={paths.MAIN}
        className={styles.paginBtn}
        activeClassName={styles.paginBtnActive}
      >
        1
      </NavLink>
      <NavLink
        to={paths.SECOND}
        className={styles.paginBtn}
        activeClassName={styles.paginBtnActive}
      >
        2
      </NavLink>
      <NavLink
        to={paths.THIRD}
        className={styles.paginBtn}
        activeClassName={styles.paginBtnActive}
      >
        3
      </NavLink>
    </div>
  );
}

export default PaginationBtns;
