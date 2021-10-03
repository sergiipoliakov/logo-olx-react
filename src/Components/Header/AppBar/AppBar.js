import React from 'react';
import styles from './AppBar.module.css';
import MobileNavigation from './MobileNavigation';
import NormalNavigation from './NormalNavigation';

function AppBar(props) {
  return (
    <div className={styles.AppBar}>
      <MobileNavigation />
      <NormalNavigation />
    </div>
  );
}

AppBar.propTypes = {};

export default AppBar;
