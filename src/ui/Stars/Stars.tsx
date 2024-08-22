import { FC } from 'react';
import './Stars.css';
import { Star } from '../Star/Star';

type StarsProps = {
  rate: number;
  parentClasses?: string;
};

export const Stars: FC<StarsProps> = ({ rate, parentClasses = '' }) => {
  return (
    <div className={`${parentClasses ? `${parentClasses} ` : ''}stars`}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`stars__item${
            Math.round(rate) >= i + 1 ? ` stars__item_filled` : ''
          }`}
        >
          <Star />
        </div>
      ))}
    </div>
  );
};
