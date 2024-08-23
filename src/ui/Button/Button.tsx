import { FC, ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  onClick?: () => void;
  children?: ReactNode;
  parentClass?: string;
  icon?: ReactNode;
};

type ButtonInnerProps = {
  text: string;
  icon?: ReactNode;
};

export const Button: FC<ButtonProps> = ({
  text,
  type = 'button',
  href,
  onClick,
  children,
  parentClass,
  icon,
}) => {
  const className = `${parentClass ? `${parentClass} button` : 'button'}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children || text}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      <ButtonInner text={text} icon={icon} />
    </button>
  );
};

const ButtonInner: FC<ButtonInnerProps> = ({ text, icon = null }) => (
  <>
    {icon && <span className="button__icon">{icon}</span>}
    <span className="button__text">{text}</span>
  </>
);
