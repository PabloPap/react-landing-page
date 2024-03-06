import React from 'react';
import { Button } from '../Elements/Button/Button';
import { Logo } from '../Logo/Logo';
import { Link } from '../Link/Link';
import { useWindowSize } from '~/hooks/useWindowSize';
import mobileMenuIcon from '../../assets/icons/menu.png';
import LogoDark from '../../assets/logos/Logo.png';

export type NavItem = {
  path: string;
  name: string;
};

const navItems: NavItem[] = [
  { path: '/features', name: 'Features' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
];

export const Navbar: React.FC = () => {
  const { width } = useWindowSize();

  const desktop = width > 767;

  return (
    <nav className='header__navbar paddings'>
      <Logo logo={LogoDark} />
      {desktop ? (
        <div className='header__navbar--menu'>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link variant='navLink' href={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button>Get the app</Button>
        </div>
      ) : (
        <Link variant='mobileLink' href='/'>
          <img src={mobileMenuIcon} alt='mobile menu' />
        </Link>
      )}
    </nav>
  );
};
