import React from "react";
import logo from "../logo.svg";

function Header() {
  return (
    <header className="Header">
      <img src={logo} className="Header__logo" />
      <h2 className="Header__heading">Landlord registration</h2>
    </header>
  );
}

export default Header;
