import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Title.module.css';

function Title({ className, children, level = 1, ...restProps }) {
  const TagName = `h${level}`;
  const classList = [styles.title, className].join(' ');
  return (
    <TagName className={classList} {...restProps}>
      {children}
    </TagName>
  );
}

Title.propTypes = {};

export default Title;
