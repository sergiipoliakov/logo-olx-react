import styles from './AuthCard.module.css';

export default function AuthCard({ children, className }) {
  const classList = [className, styles.card].join(' ');
  return <div className={classList}>{children}</div>;
}
