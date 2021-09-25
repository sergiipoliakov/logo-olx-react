import PropTypes from 'prop-types';
import Carousel, { consts } from 'react-elastic-carousel';

import styles from './Carousel.module.css';
import Title from '../UI/typography/title/Title';
import IconButton from '../../Components/UI/IconButton';

import { ReactComponent as NextIcon } from '../../icons/NextIcon.svg';
import { ReactComponent as PrevIcon } from '../../icons/PrevIcon.svg';
import { Link } from 'react-router-dom';
import ProductCard from '../Product/ProductCard';

function MyCarousel({ items, title, to }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 961, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <PrevIcon className={styles.paginationIcon} />
      ) : (
        <NextIcon className={styles.paginationIcon} />
      );
    return (
      <IconButton
        className={styles.button}
        onClick={onClick}
        disabled={isEdge}
        aria-label="carousel-button"
      >
        {pointer}
      </IconButton>
    );
  };
  return (
    <div className={styles.box}>
      <div className={styles.boxPagination}>
        <Title className={styles.title}>{title}</Title>
        <Link className={styles.link} to={to}>
          Дивитися всі
        </Link>
      </div>
      <Carousel
        breakPoints={breakPoints}
        className={styles.caruselItem}
        // enableAutoPlay
        // autoPlaySpeed={1500}
        renderArrow={myArrow}
        renderPagination={() => <></>}
      >
        {items?.map(item => (
          <ProductCard
            key={item._id}
            imageSrc={item.imageUrls[0]}
            oldPrice={item.oldPrice}
            price={item.price}
            title={item.title}
            id={item._id}
          />
        ))}
      </Carousel>
    </div>
  );
}
// Carousel.defaultProps = {
//   items: [],
// };

Carousel.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  to: PropTypes.string,
};

export default MyCarousel;
