const API_URL = 'http://localhost:3000'

export interface Restaurant {
  id: string
  name: string
  description: string
  raiting: number
  url: string
}

export const getRestaurants = (): Promise<Restaurant[]> =>
  fetch(`${API_URL}/restaurants`).then((res) => res.json())

interface UpdateRestaurantRaitingArgs {
  id: Restaurant['id']
  raiting: Restaurant['raiting']
}

export const updateRestaurantRating = ({
  id,
  raiting,
}: UpdateRestaurantRaitingArgs): Promise<Restaurant> =>
  fetch(`${API_URL}/restaurants/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ raiting }),
  }).then((res) => res.json())
