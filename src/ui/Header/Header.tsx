import './Header.css';

import { Logo } from '../Logo/Logo';
import { Profile } from '../Profile/Profile';

export const Header = () => {
  return (
    <header>
      <Logo />
      <Profile />
    </header>
  );
};
