import { Link } from '../Link/Link';
// import logo from '../../assets/logos/Logo.png';

export type LogoProps = {
  logo: string;
};

export const Logo = ({ logo }: LogoProps) => {
  return (
    <Link href='/'>
      <img src={logo} alt='Logo' />
    </Link>
  );
};
