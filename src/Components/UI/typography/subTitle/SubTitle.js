import React from 'react';
// import PropTypes from 'prop-types';
import styles from './SubTitle.module.css';

function SubTitle({ className, children, level = 3, ...restProps }) {
  const TagName = `h${level}`;
  const classList = [className, styles.title].join(' ');
  return (
    <TagName className={classList} {...restProps}>
      {children}
    </TagName>
  );
}

SubTitle.propTypes = {};

export default SubTitle;
