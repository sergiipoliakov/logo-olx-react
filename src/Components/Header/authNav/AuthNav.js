import withShowModal from '../../hoc/withShowModal';
import styles from './AuthNav.module.css';

function AuthNav({ value }) {
  const { onLoginClick, onRegisterClick } = value;

  return (
    <div>
      <ul className={styles.authList}>
        <li>
          <button className={styles.authLink} onClick={onRegisterClick}>
            Реєстрація /
          </button>
        </li>
        <li>
          <button className={styles.authLink} onClick={onLoginClick}>
            Увійти
          </button>
        </li>
      </ul>
    </div>
  );
}

export default withShowModal(AuthNav);
