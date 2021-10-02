import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCardList.module.css';
import PrimaryButton from '../../UI/buttons/PrimaryButton';
import ProductCard from '../ProductCard';
// import Container from '../../UI/Container/Container';

function ProductList({ items, isUserCardsPage, isFavouritesCardsPage }) {
  const [unSet, setUnSet] = useState(12);

  const makePagineate = function (array) {
    return array.slice(0, unSet);
  };

  const paginatedCards = makePagineate(items);

  return (
    <>
      <ul className={styles.list}>
        {paginatedCards.map(item => (
          <ProductCard
            key={item._id ? item._id : item.id}
            id={item._id ? item._id : item.id}
            imageSrc={item.imageUrls[0]}
            oldPrice={item.oldPrice}
            price={item.price}
            title={item.title}
            isUserCardsPage={isUserCardsPage}
            isFavouritesCardsPage={isFavouritesCardsPage}
          />
        ))}
      </ul>
      <div>
        {items.length > 12 && paginatedCards.length !== items.length && (
          <PrimaryButton
            className={styles.button}
            type="button"
            onClick={() => {
              setUnSet(unSet + 12);
            }}
          >
            Загрузить ещё
          </PrimaryButton>
        )}
      </div>
    </>
  );
}

ProductList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};

export default ProductList;
