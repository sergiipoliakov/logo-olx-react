import PropTypes from 'prop-types';
import styles from './Select.module.css';
import { nanoid } from 'nanoid';

const Select = props => {
  const { name, label, className, value, ...restProps } = props;
  console.log('🚀 ~ file: Select.js ~ line 7 ~ value', value);

  const id = nanoid();
  const classList = [className, styles.selectWrapper].join(' ');
  return (
    <div className={classList}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <select
        {...restProps}
        name={name}
        id={id}
        className={styles.select}
        defaultValue={value}
      >
        <option value="property">Недвижимость</option>
        <option value="transport">Транспорт</option>
        <option value="trade">Обмен</option>
        <option value="free">Бесплатно</option>
        <option value="recreation and sport">воссоздание и Спорт</option>
        <option value="business and services">Бизнес и Сарвис 3</option>
        <option value="electronics">Елекронника</option>
        <option value="work">Робота</option>
      </select>
    </div>
  );
};
Select.defaultProps = {
  value: 'property',
  name: '',
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
