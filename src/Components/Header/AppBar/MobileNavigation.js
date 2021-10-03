import { useState } from 'react';
import styles from './AppBar.module.css';
import NavLinks from './NavLinks';
import IconButton from '../../UI/IconButton';
import { ReactComponent as CloseIcon } from '../../../icons/close.svg';
import { ReactComponent as OpenMenuBurger } from '../../../icons/openMenu.svg';

export default function MobailNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.MobileNavigation}>
      {open ? (
        <IconButton
          className={styles.closeBtn}
          onClick={() => setOpen(false)}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      ) : (
        <IconButton
          className={styles.openBtn}
          onClick={() => setOpen(true)}
          aria-label="open"
        >
          <OpenMenuBurger />
        </IconButton>
      )}
      {open && (
        <div className={styles.background}>
          <NavLinks />
        </div>
      )}
    </div>
  );
}
