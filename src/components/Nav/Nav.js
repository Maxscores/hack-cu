import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export const Nav = () => (
  <div className='nav'>
    <NavLink to='/bitcoin'>Bitcoin</NavLink>
    <NavLink to='/ethereum'>Ethereum</NavLink>
    <NavLink to='/compare'>Compare</NavLink>
    <NavLink to='/about'>About</NavLink>
  </div>
)

  
