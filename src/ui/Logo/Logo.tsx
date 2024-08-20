import './Logo.css';

import LogoIcon from '../../assets/stair.svg?react';

export const Logo = () => {
  return (
    <div className="logo">
      <LogoIcon width={16} height={16} className="logo__icon" />
      <span>Eats</span>
    </div>
  );
};
