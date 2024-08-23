import { checkResponse } from './checkResponse';

const API_URL = 'http://localhost:3000';

export interface Restaurant {
  id: string;
  name: string;
  type: string;
  rating: number;
  url: string;
}

export const getRestaurants = (): Promise<Restaurant[]> =>
  fetch(`${API_URL}/restaurants`)
    .then((res) => checkResponse(res))
    .then((res) => res.json());

interface UpdateRestaurantRatingArgs {
  id: Restaurant['id'];
  rating: Restaurant['rating'];
}

export const updateRestaurantRating = ({
  id,
  rating,
}: UpdateRestaurantRatingArgs): Promise<Restaurant> =>
  fetch(`${API_URL}/restaurants/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ rating }),
  }).then((res) => res.json());
