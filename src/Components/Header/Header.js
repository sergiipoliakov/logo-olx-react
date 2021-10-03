import React from 'react';
import AppBar from './AppBar';
import Navigation from './Navigation';

function Header(props) {
  return (
    <div>
      <Navigation />

      <AppBar />
    </div>
  );
}

// Header.propTypes = {};

export default Header;
