import React from 'react';
import iphone from '../../assets/images/iphone.png';
import { Button } from '~/components/Elements/Button/Button';

export const Hero: React.FC = () => {
  return (
    <div className='header__hero'>
      <div className='header__hero--content'>
        <h1>
          You can buy anything with <span>COINCASH</span>
        </h1>
        <p>The easiest way to use your cryptocurrencies for everyday purchases.</p>
        <Button>Download now for free</Button>
      </div>
      <div className='header__hero--image'>
        <img src={iphone} alt='' />
      </div>
    </div>
  );
};
