import styles from './Container.module.css';
import PropTypes from 'prop-types';

function Container({ as: TagName, className, children }) {
  const classList = [styles.container, className].join(' ');
  return <TagName className={classList}>{children}</TagName>;
}
Container.defaultProps = {
  as: 'div',
  className: '',
};

Container.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
};

export default Container;
