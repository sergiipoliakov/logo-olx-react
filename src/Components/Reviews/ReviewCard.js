import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from 'react-elastic-carousel';

import { cardsOperations } from '../../redux/userCards';

import { useState } from 'react';
import styles from './ReviewCard.module.css';
import Title from '../UI/typography/title/Title';
import SubTitle from '../UI/typography/subTitle';
import AuthCard from '../Forms/auth-card/AuthCard';
import IconButton from '../UI/IconButton';
import PrimaryButton from '../UI/buttons/PrimaryButton';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import { ReactComponent as HardIcon } from '../../icons/Hard.svg';
import { ReactComponent as Share } from '../../icons/share.svg';

function ReviewCard({
  onModalClose,
  onFavouritClick,
  card: {
    _id = '',
    id = '',
    price = 0,
    productCode = '105-С',
    name = 'Олга',
    phone = '+30999090909',
    dataFrom = 'на OLX с нояб. 2018',
    description = "Для того щоб ваше нове оголошення з'явилося в огляді, просто перезавантажте сторінку. Незабаром буде виправлене новим оновленням додатока",
    imageUrls = [
      'https://mcleansmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg',
    ],
    title = 'перезавантажте сторінку',
  } = {},
}) {
  const [showInfo, setShowInfo] = useState(false);
  function myArrow({ type }) {
    // const pointer = type === consts.PREV ? '👈' : '👉';
    return <></>;
  }

  return (
    <AuthCard className={styles.authCard}>
      <div className={styles.content}>
        <div className={styles.titleMobile}>
          <Title className={styles.title}>{title}</Title>
          <SubTitle level={3} className={styles.productCode}>
            код товару | {productCode}
          </SubTitle>
        </div>
        <div className={styles.normalCarousel}>
          <Carousel renderArrow={myArrow}>
            {imageUrls.map(img => (
              <img src={img} key={img} alt={title} />
            ))}
          </Carousel>
        </div>
        <div className={styles.mobileCarousel}>
          <Carousel renderArrow={myArrow}>
            {imageUrls.map(img => (
              <img
                src={img}
                key={img}
                alt={title}
                className={styles.mainImage}
              />
            ))}
          </Carousel>
        </div>

        <div className={styles.info}>
          <div className={styles.titleNormal}>
            <Title className={styles.title}>{title}</Title>
            <SubTitle level={3} className={styles.productCode}>
              код товару | {productCode}
            </SubTitle>
          </div>

          <Title className={styles.price}>{price} грн</Title>

          <IconButton
            onClick={onModalClose}
            className={styles.closeBtn}
            aria-label="Закрыть модалку"
          >
            <CloseIcon />
          </IconButton>
          <div>
            {showInfo ? (
              <div
                className={styles.sellerInfo}
                onClick={() => setShowInfo(!showInfo)}
              >
                <div className={styles.name}>
                  <Title>{name} - </Title>
                  <SubTitle className={styles.dataFrom}> {dataFrom}</SubTitle>
                </div>

                <Title>{phone}</Title>
              </div>
            ) : (
              <PrimaryButton
                className={styles.primaryBtn}
                onClick={() => setShowInfo(!showInfo)}
              >
                Информация о продавце
              </PrimaryButton>
            )}
          </div>

          <div className={styles.funtion}>
            <SubTitle
              className={styles.hardIconBtn}
              onClick={() => onFavouritClick(_id ? _id : id)}
            >
              В обране <HardIcon />
            </SubTitle>
            <SubTitle className={styles.hardIconBtn}>
              Поділитися <Share />
            </SubTitle>
          </div>
          <SubTitle>Опис:</SubTitle>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </AuthCard>
  );
}

ReviewCard.propTypes = {
  card: PropTypes.shape({
    price: PropTypes.number.isRequired,
    productCode: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string.isRequired,
    dataFrom: PropTypes.string,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrls: PropTypes.array.isRequired,
  }),
};

const mapDispatchToProps = {
  onFavouritClick: cardsOperations.addCardToFavourit,
};

export default connect(null, mapDispatchToProps)(ReviewCard);
