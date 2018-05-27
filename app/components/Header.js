import React from 'react';
import AppBar from '@material-ui/core/AppBar';

const Header = () => {
  return (
    <AppBar>
      <h1 style={{ marginLeft: 30, fontFamily: 'roboto', fontWeight: 400 }}>Dashboard</h1>
    </AppBar>
  );
};

export default Header;
