import React from 'react';
import { Restaurant, UpdateRestaurantRatingArgs } from '../types/Restaurant';

export function getRestaurantEstimate(
  event: React.MouseEvent,
  data: Restaurant[],
): UpdateRestaurantRatingArgs {
  const id: string | null | undefined = event.currentTarget
    .closest('.restaurant-card')
    ?.getAttribute('data-restaurant-id');

  if (!id) {
    throw new Error('No restaurant ID found');
  }

  const rateAttr = event.currentTarget.getAttribute('data-rate');
  const estimate: number | null = rateAttr ? +rateAttr : NaN;

  if (isNaN(estimate)) {
    throw new Error('Estimate not determined');
  }

  return {
    id,
    estimates: [
      ...data![data!.findIndex((restaurant) => restaurant.id === id)].estimates,
      estimate,
    ],
  };
}
