import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => (
  <div>
    <NavLink to='/bitcoin'>Bitcoin</NavLink>
    <NavLink to='/ethereum'>Ethereum</NavLink>
    <NavLink to='/compare'>Compare</NavLink>
    <NavLink to='/about'>About</NavLink>
  </div>
)

  
