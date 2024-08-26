import {
  Restaurant,
  RestaurantSchema,
  UpdateRestaurantRatingArgs,
} from '../types/Restaurant';
import { checkResponse } from './checkResponse';

const API_URL = 'http://localhost:3000';

export function getRestaurants(): Promise<Restaurant[]> {
  return fetch(`${API_URL}/restaurants`)
    .then(checkResponse)
    .then((response) => response.json())
    .then((data) => RestaurantSchema.array().parse(data));
}

export function updateRestaurantRating({
  id,
  estimates,
}: UpdateRestaurantRatingArgs): Promise<void> {
  return fetch(`${API_URL}/restaurants/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ estimates }),
  })
    .then(checkResponse)
    .then(() => undefined);
}
