import PropTypes from 'prop-types';
import styles from './ProductCard.module.css';
import IconButton from '../../UI/IconButton';
import { ReactComponent as HardIcon } from '../../../icons/Hard.svg';
import { ReactComponent as FullScreenIcon } from '../../../icons/fullscreen.svg';

const ProductCard = ({ imageSrc, oldPrice, price, title, id }) => {
  return (
    <li className={styles.card}>
      <div className={styles.wraper}>
        <img className={styles.image} src={imageSrc} alt={title} />
        <div className={styles.layaut}>
          <IconButton
            className={styles.hardIcon}
            data-id={id}
            aria-label="hardIcon"
          >
            <HardIcon data-id={id} />
          </IconButton>
          <IconButton
            className={styles.fullScreenIcon}
            data-id={id}
            aria-label="fullScreenIcon"
          >
            <FullScreenIcon data-id={id} />
          </IconButton>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>
          {oldPrice && <span className={styles.oldPrise}>{oldPrice} грн </span>}
          {price} грн
        </p>
      </div>
    </li>
  );
};
ProductCard.defaultProps = {
  imageSrc:
    'https://mcleansmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg',
};

ProductCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  oldPrice: PropTypes.number,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
export default ProductCard;
