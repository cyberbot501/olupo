import React, { useState, useEffect } from 'react';
import logo from '../../Assets/flat-design-farmers-market-logo_23-2149332945.avif';
import './nav.css';

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`f-nav ${scrollPosition > 50 ? 'f-nav-scrolled' : ''}`}>
      <div className='s-nav'>
        <img src={logo} alt="" />
        <p className='curve'>Olupo Agric</p>
      </div>

      <ul className='l-nav'>
      <li><a href='#'>Home</a></li>
        <li><a href='#'>About Us</a></li>
        <li><a href='#'>Farming Calendar</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Contact Us</a></li>
      </ul>
    </div>
  );
};

export default Nav;
