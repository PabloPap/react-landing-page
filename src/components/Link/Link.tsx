import React from 'react';

const variants = {
  navLink: 'link__nav',
  footerLink: 'link__footer',
  mobileLink: 'link__mobile',
};

export type LinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
};

export const Link = ({ href = '/', children, variant = 'navLink' }: LinkProps) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  const linkClasses = `link ${variants[variant] || ''}`;

  return (
    <a className={linkClasses} href={href} onClick={handleClick}>
      {children}
    </a>
  );
};
