import './RestaurantsList.css';

import { RestaurantCard } from '../RestaurantCard/RestaurantCard';
import { useContext } from 'react';
import { RestaurantsContext } from '../../contexts/RestaurantsContext';

export const RestaurantsList = () => {
  const { data, search } = useContext(RestaurantsContext);

  return (
    <section className="restaurants-list">
      <div className="container">
        <ul className="restaurants-list__items">
          {data &&
            (search
              ? data.filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase()),
                )
              : data
            ).map((item) => (
              <li className="restaurants-list__item" key={item.id}>
                <RestaurantCard
                  id={item.id}
                  name={item.name}
                  type={item.type}
                  rating={item.rating}
                  url={item.url}
                />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
