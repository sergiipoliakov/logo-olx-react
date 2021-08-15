import PropTypes from 'prop-types';
import styles from './ProductCard.module.css';
import sprite from '../../../images/sprite/symbol-defs.svg';

const defaultImg =
  'https://mcleansmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg';

const ProductCard = ({ imageSrc, oldPrice, price, title, id }) => {
  return (
    <li className={styles.card}>
      <svg className={styles.svg} data-id={id}>
        <use href={sprite + '#icon-heart-orange'} data-id={id}></use>
      </svg>
      <div className={styles.wraper}>
        <img className={styles.image} src={imageSrc} alt={title} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>
          <span className={styles.oldPrise}>{oldPrice} грн </span>
          {price} грн
        </p>
      </div>
    </li>
  );
};
ProductCard.defaultProps = {
  imageSrc: defaultImg,
};

ProductCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  oldPrice: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
export default ProductCard;
