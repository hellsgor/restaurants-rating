import { z } from 'zod';

export const RestaurantSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  rating: z.number(),
  url: z.string(),
  estimates: z.array(z.number()),
});

export type Restaurant = z.infer<typeof RestaurantSchema>;

export interface UpdateRestaurantRatingArgs {
  id: Restaurant['id'];
  rating: Restaurant['rating'];
}
