import './RestaurantsList.css';

import { RestaurantCard } from '../RestaurantCard/RestaurantCard';

export const RestaurantsList = () => {
  return (
    <section className="restaurants-list">
      <div className="container">
        <ul className="restaurants-list__items">
          <li className="restaurants-list__item">
            <RestaurantCard
              id="1"
              name="Mama's Kitchen"
              type="American"
              rating={4.7}
              url="/mamas-kitchen.png"
            />
          </li>

          <li className="restaurants-list__item">
            <RestaurantCard
              id="2"
              name="The Burger Joint"
              type="American"
              rating={4.6}
              url="/burger-joint.png"
            />
          </li>

          <li className="restaurants-list__item">
            <RestaurantCard
              id="3"
              name="Pasta Express"
              type="American"
              rating={3.4}
              url="/pasta-express.png"
            />
          </li>

          <li className="restaurants-list__item">
            <RestaurantCard
              id="4"
              name="Taco Fiesta"
              type="American"
              rating={4.8}
              url="/taco-fiesta.png"
            />
          </li>

          <li className="restaurants-list__item">
            <RestaurantCard
              id="4"
              name="Taco Fiesta"
              type="American"
              rating={4.8}
              url="/taco-fiesta.png"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
