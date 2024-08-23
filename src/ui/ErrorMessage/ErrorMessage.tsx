import { FC, ReactNode } from 'react';
import { Button } from '../Button/Button';

import './ErrorMessage.css';

type ErrorMessageProps = {
  message: string;
  buttonText?: string;
  buttonHandler?: () => void;
  buttonIcon?: ReactNode;
};

export const ErrorMessage: FC<ErrorMessageProps> = ({
  message,
  buttonText = null,
  buttonHandler = null,
  buttonIcon = null,
}) => (
  <div className="error-message">
    <div className="container">
      <div className="error-message__wrapper">
        <p className="error-message__title">Something went wrong!</p>
        <p className="error-message__text">Error message: {message}</p>
      </div>

      {buttonText && buttonHandler && (
        <Button
          text={buttonText}
          parentClass="error-message__button"
          onClick={buttonHandler}
          icon={buttonIcon}
        />
      )}
    </div>
  </div>
);
