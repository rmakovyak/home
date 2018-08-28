import React from 'react';

import logo from '../logo.svg';
import styles from './Header.css';

function Header() {
  return (
    <header className="Header">
      <a href="/">
        <img src={logo} className="Header__logo" />
      </a>
      <h2 className="Header__heading">Tenant registration</h2>
    </header>
  );
}

export default Header;
