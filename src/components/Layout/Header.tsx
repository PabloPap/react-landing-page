import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from '~/pages/Home/Hero';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <Navbar />
      <Hero />
    </header>
  );
};
