import PropTypes from 'prop-types';
import styles from './File.module.css';
import Title from '../typography/title/Title';

const Input = props => {
  const {
    name,
    type,
    label,
    className,
    previewFiles,
    onDeleteImageClick,
    ...restProps
  } = props;
  // const id = Date.now();

  // console.log('previewFiles', typeof previewFiles);
  // console.log('previewFiles', previewFiles);

  const classList = [className, styles.inputWrapper].join(' ');

  return (
    <div className={classList}>
      <Title className={styles.title}>Фото</Title>
      <div>
        {label && (
          <label className={styles.label}>
            +
            <input
              className={styles.input}
              type={type}
              name={name}
              multiple
              {...restProps}
            />
          </label>
        )}
      </div>

      {previewFiles.length !== 0 && (
        <ul className={styles.previewFotosList}>
          {previewFiles.map(foto => (
            <li key={foto}>
              <img
                src={foto}
                alt="previewFile"
                onClick={() => onDeleteImageClick()}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
Input.defaultProps = {
  type: 'file',
  name: null,
  label: '',
  className: '',
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
