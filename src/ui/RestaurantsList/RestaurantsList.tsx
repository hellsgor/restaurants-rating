import './RestaurantsList.css';

import { RestaurantCard } from '../RestaurantCard/RestaurantCard';
import { useContext } from 'react';
import { RestaurantsContext } from '../../contexts/RestaurantsContext';

export const RestaurantsList = () => {
  const { data } = useContext(RestaurantsContext);

  const calcRating = (estimates: number[]): number =>
    Math.round(
      (estimates.reduce((acc, item) => acc + item, 0) / estimates.length) * 10,
    ) / 10;

  return (
    <section className="restaurants-list">
      <div className="container">
        <ul className="restaurants-list__items">
          {data &&
            data.map((item) => (
              <li className="restaurants-list__item" key={item.id}>
                <RestaurantCard
                  id={item.id}
                  name={item.name}
                  type={item.type}
                  rating={
                    item.estimates.length
                      ? calcRating(item.estimates)
                      : item.rating
                  }
                  url={item.url}
                />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
