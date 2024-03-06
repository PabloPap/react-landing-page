import React from 'react';
import shop1 from '../../../assets/images/shop-1.png';
import shop2 from '../../../assets/images/shop-2.png';

export const MainGallery: React.FC = () => {
  return (
    <div className='mainGallery paddings'>
      <div className='mainGallery__description'>
        <img src={shop1} alt='shop1' />
        <div className='mainGallery__description--content'>
          <h2>Shop anywhere </h2>
          <p>The easiest way to use your cryptocurrencies for everyday purchases. </p>
        </div>
      </div>

      <div className='mainGallery__description reverse'>
        <div className='mainGallery__description--content'>
          <h2>Zero fees</h2>
          <p>The easiest way to use your cryptocurrencies for everyday purchases. </p>
        </div>
        <img src={shop2} alt='shop2' />
      </div>
    </div>
  );
};
