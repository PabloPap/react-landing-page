import React, { useState } from 'react';
import { validateEmail } from '~/utils/validateEmail';
import { Button } from '../Elements/Button/Button';

export const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Email submitted: ' + email);
  };

  return (
    <form onSubmit={handleSubmit} className='emailForm'>
      <label htmlFor='email' className='visually-hidden'>
        email
      </label>
      <input
        name='email'
        type='email'
        id='email'
        value={email}
        onChange={handleEmailChange}
        placeholder='Type your email here'
      />
      <Button type='submit' disabled={!isValid}>
        Sign up
      </Button>
    </form>
  );
};
