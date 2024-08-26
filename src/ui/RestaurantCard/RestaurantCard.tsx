import { FC } from 'react';
import { Rating } from '../Stars/Rating';
import './RestaurantCard.css';

interface RestaurantCard {
  id: string;
  name: string;
  type?: string;
  rating?: number;
  url?: string;
}

export const RestaurantCard: FC<RestaurantCard> = ({
  id,
  name,
  type,
  rating,
  url,
}) => {
  return (
    <article className="restaurant-card" data-restaurant-id={id}>
      <div
        className={`restaurant-card__photo${
          url ? '' : ' restaurant-card__photo_default'
        }`}
      >
        <img
          src={url ? url : '/src/assets/missing-image.svg'}
          alt={`${name} photo`}
        />
      </div>

      <div className="restaurant-card__text-content">
        <h4>{name}</h4>

        {(type || rating) && (
          <p>
            {type && <span>{type}</span>}
            {rating && <span>{rating}</span>}
          </p>
        )}
      </div>

      {rating && (
        <Rating rate={rating} parentClasses="restaurant-card__rating" />
      )}
    </article>
  );
};
