import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <div>
      <h1>logo</h1>
      <a href="#">Реєстрація /</a> <a href="#"> Увійти</a>
    </div>
  );
}

Header.propTypes = {};

export default Header;
