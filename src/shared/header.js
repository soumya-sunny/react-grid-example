import React from 'react';
import {  Link } from 'react-router-dom';

export const Header = () => {
  return (
  <header>
      <nav>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/employee/:empId'>Employee Details</Link></li>
        </ul>
      </nav>
    </header>
  )
}

/*Todo - NavLink */
