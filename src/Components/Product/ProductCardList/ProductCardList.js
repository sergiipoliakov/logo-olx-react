import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCardList.module.css';
import ProductCard from '../ProductCard';

function ProductList({ items }) {
  console.log(items);
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <ProductCard
          key={item.id}
          // imageSrc={item.imageSrc}
          oldPrice={item.oldPrice}
          price={item.price}
          title={item.title}
        />
      ))}
    </ul>
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
