import { FC, ReactNode } from 'react';
import { Button } from '../Button/Button';

import './ErrorMessage.css';

type ErrorMessageProps = {
  title?: string;
  message?: string;
  buttonText?: string;
  buttonHandler?: () => void;
  buttonIcon?: ReactNode;
};

export const ErrorMessage: FC<ErrorMessageProps> = ({
  message = null,
  title = null,
  buttonText = null,
  buttonHandler = null,
  buttonIcon = null,
}) => (
  <div className="error-message">
    <div className="container">
      <div className="error-message__wrapper">
        <p className="error-message__title">
          {title || 'Something went wrong!'}
        </p>
        {message && (
          <p className="error-message__text">Error message: {message}</p>
        )}
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
