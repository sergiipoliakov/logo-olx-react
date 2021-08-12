import PropTypes from 'prop-types';
import styles from './ProductCard.module.css';

const ProductCard = ({ imageSrc, oldPrice, price, title }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageSrc} alt={title} />

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>
        <span className={styles.oldPrise}>{oldPrice} грн </span>
        {price} грн
      </p>
    </div>
  );
};
ProductCard.defaultProps = {};

ProductCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  oldPrice: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
export default ProductCard;
