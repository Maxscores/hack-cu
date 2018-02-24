import React from 'react';
import { Nav } from '../Nav/Nav';
import { Link } from 'react-router-dom';

export const Header = () => (
  <div>
    <Link to='/'><h1>Hack CU</h1></Link>
    <Nav />
  </div>
)