import React from 'react';
import { Achievement } from '../Achievement';
import { MainTitle } from './MainTitle';
import { MainServices } from './MainServices';
import { MainGallery } from './MainGallery';

export const Main: React.FC = () => {
  return (
    <div className='main'>
      <Achievement />
      <MainTitle />
      <MainServices />
      <MainGallery />
    </div>
  );
};
