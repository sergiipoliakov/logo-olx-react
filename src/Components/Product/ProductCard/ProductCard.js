import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withShowModal from '../../hoc/withShowModal';

import styles from './ProductCard.module.css';
import IconButton from '../../UI/IconButton';
import { ReactComponent as HardIcon } from '../../../icons/Hard.svg';
import { ReactComponent as EditIcon } from '../../../icons/editIcon.svg';
import { ReactComponent as FullScreenIcon } from '../../../icons/fullscreen.svg';
import { cardsOperations } from '../../../redux/userCards';
import { allCardsOperations } from '../../../redux/cards';
import { authSelectors } from '../../../redux/auth';

const ProductCard = ({
  value,
  imageSrc,
  oldPrice,
  price,
  title,
  id,
  isUserCardsPage,
  isFavouritesCardsPage,
  onFavouritClick,
  onFavouritDelete,
  setUserCardId,
  setCardId,
  isAuthenticated,
}) => {
  function openReviewProductCard() {
    setCardId(id);
    value.onReviewProductClick();
  }

  function openEditProductCard() {
    setUserCardId(id);
    value.onEditProductClick();
  }

  return (
    <li className={styles.card}>
      <div className={styles.wraper}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>
        {/* <img className={styles.image} src={imageSrc} alt={title} /> */}
        <div className={styles.layaut}>
          {isFavouritesCardsPage ? (
            <IconButton
              className={styles.hardIcon}
              aria-label="hardIcon"
              onClick={() => onFavouritDelete(id)}
            >
              <HardIcon className={styles.activeFavourit} />
            </IconButton>
          ) : (
            <IconButton
              className={styles.hardIcon}
              aria-label="hardIcon"
              onClick={() =>
                isAuthenticated ? onFavouritClick(id) : alert('Please Login!')
              }
            >
              <HardIcon />
            </IconButton>
          )}
          {isUserCardsPage && (
            <IconButton
              className={styles.editIcon}
              aria-label="editIcon"
              onClick={openEditProductCard}
            >
              <EditIcon />
            </IconButton>
          )}
          <IconButton
            className={styles.fullScreenIcon}
            aria-label="fullScreenIcon"
            onClick={openReviewProductCard}
          >
            <FullScreenIcon />
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
    'https://mpama.com/wp-content/uploads/2017/04/default-image-620x600.jpg',
};

ProductCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  oldPrice: PropTypes.number,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {
  onFavouritClick: cardsOperations.addCardToFavourit,
  onFavouritDelete: cardsOperations.deleteFavourit,
  onDeleteCard: cardsOperations.deleteCard,
  setUserCardId: cardsOperations.cardId,
  setCardId: allCardsOperations.cardId,
};

export default withShowModal(
  connect(mapStateToProps, mapDispatchToProps)(ProductCard),
);
