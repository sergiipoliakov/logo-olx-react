import PropTypes from 'prop-types';
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

const defaultImg =
  'https://mcleansmartialarts.com/wp-content/uploads/2017/04/default-image-620x600.jpg';

function ReviewCard({
  onModalClose,
  price,
  productCode,
  name,
  phone,
  dataFrom,
  description,
  imageSrc,
  title,
}) {
  const [showInfo, setShowInfo] = useState(false);
  console.log(showInfo);
  return (
    <AuthCard>
      <div className={styles.content}>
        <div>
          <div>
            <img className={styles.mainImage} src={imageSrc} alt={title} />
            <div className={styles.smallImageContainer}>
              <div className={styles.smallImage}></div>
              <div className={styles.smallImage}></div>
              <div className={styles.smallImage}></div>
              <div className={styles.smallImage}></div>
              <div className={styles.smallImage}></div>
            </div>
          </div>
        </div>

        <div>
          <Title className={styles.title}>{title}</Title>
          <SubTitle level={3} className={styles.productCode}>
            код товару | {productCode}
          </SubTitle>

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
            <SubTitle className={styles.hardIcon}>
              В обране <HardIcon />
            </SubTitle>
            <SubTitle className={styles.hardIcon}>
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

ReviewCard.defaultProps = {
  price: 0,
  productCode: '105-С',
  name: 'Олга',
  phone: '099090909',
  dataFrom: 'на OLX с нояб. 2018',
  title: 'Футболка спортивна',
  imageSrc: defaultImg,
  description:
    'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона',
};

ReviewCard.propTypes = {
  price: PropTypes.number,
  productCode: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  dataFrom: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default ReviewCard;
