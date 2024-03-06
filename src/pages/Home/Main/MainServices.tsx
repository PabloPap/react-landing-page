import React from 'react';
import airplane from '../../../assets/icons/Airplane Ticket.png';
import cart from '../../../assets/icons/Cart.png';
import bill from '../../../assets/icons/Page.png';

export const MainServices: React.FC = () => {
  return (
    <div className='mainServices paddings'>
      <div className='mainServices__scrollable'>
        <div className='mainServices__card'>
          <img src={airplane} alt='airplane' />
          <p>You can</p>
          <p>
            <span>book</span> tickets
          </p>
        </div>
        <div className='mainServices__card'>
          <img src={cart} alt='cart' />
          <p>You can</p>
          <p>
            <span>buy</span> groceries
          </p>
        </div>
        <div className='mainServices__card'>
          <img src={bill} alt='bill' />
          <p>You can</p>
          <p>
            <span>pay</span> your bills
          </p>
        </div>
      </div>
    </div>
  );
};
