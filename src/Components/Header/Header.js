import React from 'react';
// import PropTypes from 'prop-types';
import AppBar from './AppBar';
import AuthNav from './authNav/AuthNav';

function Header(props) {
  return (
    <div>
      <AuthNav />
      <AppBar />
    </div>
  );
}

// Header.propTypes = {};

export default Header;
