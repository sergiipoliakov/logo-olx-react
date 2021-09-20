import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ProductCard.module.css';
import IconButton from '../../UI/IconButton';
import { ReactComponent as HardIcon } from '../../../icons/Hard.svg';
import { ReactComponent as EditIcon } from '../../../icons/editIcon.svg';
import { ReactComponent as FullScreenIcon } from '../../../icons/fullscreen.svg';
import { cardsOperations } from '../../../redux/userCards';

const ProductCard = ({
  imageSrc,
  oldPrice,
  price,
  title,
  id,
  isUserCardsPage,
  isFavouritesCardsPage,
  onFavouritClick,
  onFavouritDelete,
  onDeleteCard,
}) => {
  return (
    <li className={styles.card}>
      <div className={styles.wraper}>
        <img className={styles.image} src={imageSrc} alt={title} />
        <div className={styles.layaut}>
          {isFavouritesCardsPage ? (
            <IconButton
              className={styles.hardIcon}
              data-id={id}
              aria-label="hardIcon"
              onClick={() => onFavouritDelete(id)}
            >
              <HardIcon data-id={id} className={styles.activeFavourit} />
            </IconButton>
          ) : (
            <IconButton
              className={styles.hardIcon}
              data-id={id}
              aria-label="hardIcon"
              onClick={() => onFavouritClick(id)}
            >
              <HardIcon data-id={id} />
            </IconButton>
          )}
          {isUserCardsPage && (
            <IconButton
              className={styles.editIcon}
              data-id={id}
              aria-label="editIcon"
              onClick={() => onDeleteCard(id)}
            >
              <EditIcon data-id={id} />
            </IconButton>
          )}
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

// const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onFavouritClick: cardsOperations.addCardToFavourit,
  onFavouritDelete: cardsOperations.deleteFavourit,
  onDeleteCard: cardsOperations.deleteCard,
};

export default connect(null, mapDispatchToProps)(ProductCard);
