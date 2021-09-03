import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCardList.module.css';
import PrimaryButton from '../../UI/buttons/PrimaryButton';
import ProductCard from '../ProductCard';

function ProductList({ items }) {
  const [unSet, setUnSet] = useState(12);
  const [activeBtn, setActiveBtn] = useState('');

  // const classList = [styles.button, activeBtn].join(' ');

  const makePagineate = function (array) {
    return array.slice(0, unSet);
  };

  const paginatedCards = makePagineate(items);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {paginatedCards.map(item => (
          <ProductCard
            key={item._id}
            imageSrc={item.imageUrls[0]}
            oldPrice={item.oldPrice}
            price={item.price}
            title={item.title}
          />
        ))}
      </ul>
      <div>
        <PrimaryButton
          className={styles.button}
          type="button"
          onClick={() => {
            setUnSet(unSet + 12);
          }}
        >
          Загрузить ещё
        </PrimaryButton>
      </div>
    </div>
  );
}

ProductList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};

export default ProductList;
