import React from 'react';
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
