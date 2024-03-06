import React, { ReactNode } from 'react';
import { Logo } from '../Logo/Logo';
import { Link } from '../Link/Link';
import { EmailForm } from '../Form/EmailForm';
import LogoWhite from '../../assets/logos/Logo-white.png';

export type FooterProps = {
  children?: ReactNode;
  showNewsletter?: boolean;
  showTextSection?: boolean;
};

export const Footer: React.FC<FooterProps> = () => {
  return (
    <div className='footer paddings'>
      <div className='footer__title'>
        <h2>
          Get started <span>today</span>
        </h2>
        <p>
          Sing up to receive email updates on new products announcements, special promotions sales
          an more.
        </p>
      </div>

      <div className='footer__form'>
        <EmailForm />
      </div>

      <div className='footer__legal'>
        <Logo logo={LogoWhite} />
        <div className='footer__legal--links'>
          <Link variant='footerLink' href='/'>
            Privacy Policy
          </Link>
          <Link variant='footerLink' href='/'>
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};
