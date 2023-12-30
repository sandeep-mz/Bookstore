// NavBar.js

import React, { useState } from 'react';
import '../App.css'; // Import the CSS file

import logo from '../img/logo.svg'; // Import the logo SVG
import icon1 from '../img/icon1.svg'; // Import SVG icon 1
import icon2 from '../img/icon2.svg'; // Import SVG icon 2
import icon3 from '../img/icon3.svg'; // Import SVG icon 3
import icon4 from '../img/icon4.png'; // Import SVG icon 4

const NavBar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <header className="navbar">
      <div className="logo">
        {/* Use the imported logo */}
        <img src={logo} alt="Logo" />
      </div>
      <div className="brand-name">
        <h4>KeazoNBOOKS</h4>
      </div>
        <form className="search-box" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search for books..."
                value={searchQuery}
                onChange={handleInputChange}
                className="search-input"
            />
            <button type="submit" className="search-btn">Search</button> 
        </form>

      <div className="icons">
        {/* Use imported SVG icons */}
        <img src={icon1} alt="Icon 1" className="icon" />
        <img src={icon2} alt="Icon 2" className="icon" />
        <img src={icon3} alt="Icon 3" className="icon" />
        <img src={icon4} alt="Icon 4" className="icon" />
      </div>
    </header>
  );
};

export default NavBar;
