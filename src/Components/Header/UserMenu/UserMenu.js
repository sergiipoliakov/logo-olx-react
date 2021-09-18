import { connect } from 'react-redux';
import { authOperations } from '../../../redux/auth';
import Title from '../../UI/typography/title';
import IconButton from '../../UI/IconButton';
import { ReactComponent as UserIcon } from '../../../icons/UserIcon.svg';
import { ReactComponent as LogoutIcon } from '../../../icons/LogoutIcon.svg';
import styles from './UserMenu.module.css';
import { Link } from 'react-router-dom';

function UserMenu({ onLogout }) {
  return (
    <div className={styles.container}>
      <UserIcon />
      <Title>Мій кабінет</Title>
      <div className={styles.buttonContainer}>
        <IconButton onClick={onLogout} aria-label="logout button">
          <LogoutIcon />
        </IconButton>
      </div>
      <div>
        <ul className={styles.list}>
          <li>
            <Link to="/userCards" className={styles.button}>
              Мої оголошення
            </Link>
          </li>

          <li>
            <Link to="/favourites" className={styles.button}>
              Обране
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(null, mapDispatchToProps)(UserMenu);
