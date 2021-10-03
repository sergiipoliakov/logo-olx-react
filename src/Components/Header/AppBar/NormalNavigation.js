import React from 'react';
import styles from './AppBar.module.css';
import NavLinks from './NavLinks';

export default function NormalNavigation() {
  return (
    <div className={styles.NornaleNavigation}>
      {/* <IconButton className={styles.openBtn}>
        <OpenMenuBurger />
      </IconButton>
      <IconButton className={styles.closeBtn}>
        <CloseIcon />
      </IconButton> */}
      <NavLinks />
    </div>
  );
}
