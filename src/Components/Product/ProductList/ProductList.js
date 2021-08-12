import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';

function ProductList({ items }) {
  return (
    <div>
      {items.map(item => (
        <ProductCard
          key={item.id}
          imageSrc={item.imageSrc}
          oldPrice={item.oldPrice}
          price={item.price}
          title={item.title}
        />
      ))}
    </div>
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
