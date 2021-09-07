import React from 'react';
import styles from './AppBar.module.css';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

function AppBar(props) {
  return (
    <div>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/property"
            className={styles.link}
            activeClassName={styles.active}
          >
            Нерухомість
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/transport"
            className={styles.link}
            activeClassName={styles.active}
          >
            Транспорт
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/work"
            className={styles.link}
            activeClassName={styles.active}
          >
            Робота
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/electronics"
            className={styles.link}
            activeClassName={styles.active}
          >
            Електроніка
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/businessAndServices"
            className={styles.link}
            activeClassName={styles.active}
          >
            Бізнес та послуги
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/recreationAndSport"
            className={styles.link}
            activeClassName={styles.active}
          >
            Відпочинок і спорт
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/free"
            className={styles.link}
            activeClassName={styles.active}
          >
            Віддам безкоштовно
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trade"
            className={styles.link}
            activeClassName={styles.active}
          >
            Обмін
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

AppBar.propTypes = {};

export default AppBar;
