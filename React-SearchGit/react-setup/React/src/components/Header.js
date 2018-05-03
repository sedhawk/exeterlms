import React from 'react';

const Header = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <a href="/">Home</a>
    <a href="/search">Search</a>
    <a href="/mine">Mine</a>
  </div>
);

export default Header;