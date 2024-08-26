import { FC } from 'react';
import './Rating.css';
import { Star } from '../icons/Star/Star';

type StarsProps = {
  rate: number;
  parentClasses?: string;
};

export const Rating: FC<StarsProps> = ({ rate, parentClasses = '' }) => {
  return (
    <div className={`${parentClasses ? `${parentClasses} ` : ''}rating`}>
      <div className="rating__wrapper">
        <div className="rating__stars rating__stars_current">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`rating__item${
                Math.round(rate) >= i + 1 ? ` rating__item_filled` : ''
              }`}
            >
              <Star />
            </div>
          ))}
        </div>

        <div className="rating__stars rating__stars_desired">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="rating__item" data-rate={i + 1}>
              <Star />
            </div>
          ))}
        </div>
      </div>

      {/* <p className="rating__note">Vote for the restaurant!</p> */}
    </div>
  );
};
