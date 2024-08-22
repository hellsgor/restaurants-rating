import './Header.css';

import { Logo } from '../Logo/Logo';
import { Profile } from '../Profile/Profile';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Profile />
        </div>
      </div>
    </header>
  );
};
