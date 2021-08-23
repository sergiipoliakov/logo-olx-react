import PropTypes from 'prop-types';
import styles from './Select.module.css';

const Select = props => {
  const { name, label, className, ...restProps } = props;
  const id = Date.now();
  const classList = [className, styles.selectWrapper].join(' ');
  return (
    <div className={classList}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <select name={name} id={id} {...restProps} className={styles.select}>
        <option value="property" selected>
          Значение
        </option>
        <option value="transport">Транспорт</option>
        <option value="trade" selected>
          Обмен
        </option>
        <option value="free">Бесплатно</option>
        <option value="reсreation and sport">воссоздание и Спорт</option>
        <option value="business and services">Бизнес и Сарвис 3</option>
        <option value="electronics">Елекронника</option>
        <option value="work">Робота</option>
      </select>
    </div>
  );
};
Select.defaultProps = {
  value: 'property',
  name: null,
  label: '',
  className: '',
};

Select.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default Select;
